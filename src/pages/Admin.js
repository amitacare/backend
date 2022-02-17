import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
//import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createDoctor,updateDoctor } from '../api/mutations'
import config from '../aws-exports'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = (props) => {
    const [image, setImage] = useState(null);
    var now=new Date();
    //console.log(now);
    const [bookDetails, setBookDetails] = useState({
        id:props.user.attributes.sub,
        name:props.user.attributes.name,
        experience:"",
        image:"",
        speciality:'',
        featured:true,
        price:100,
        
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ( !bookDetails.price) return
            await API.graphql(graphqlOperation(createDoctor, { input: bookDetails }))
            setBookDetails({
                id:'',
                name:'',
            experience:"",
            image:"",
            speciality:'',
            featured:true,
            price:100 })
            console.log(bookDetails)
        } catch (err) {
            console.log('error creating updatedoctor:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setBookDetails({ ...bookDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="admin-wrapper">
            
                <section>
                    
                    <header className="form-header" style={{marginTop:-50}}>
                        <h3>Update Doctor Profile</h3>
                    </header>
                    
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div style={{flexDirection:'column',width:'100%',textAlign:'Left',marginLeft:'50%'}}>
                            <div style={{fontSize:20}}>Name: Dr.{props.user.attributes.name}</div>
                            <div style={{fontSize:20}}>ID: {props.user.attributes.sub}</div>
                        </div>

                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="experience">Experience</label></p>
                                <p><input
                                    name="email"
                                    type="title"
                                    placeholder="Type the experience"
                                    onChange={(e) => setBookDetails({ ...bookDetails, experience: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="speciality">Speciality</label></p>
                                <p><textarea
                                    name="description"
                                    type="number"
                                    rows="8"
                                    placeholder="Type the speciality in which fields"
                                    onChange={(e) => setBookDetails({ ...bookDetails, speciality: e.target.value })}
                                    required
                                /></p>
                            </div>
                            
                            <div className="price-form">
                                <p><label htmlFor="price">Price (&#8377;)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of one booking (INR)"
                                        onChange={(e) => 
                                            {
                                                console.log(e.target.value)
                                                if(/[^0-9]/g.test(e.target.value))
                                                {
                                                setBookDetails({ ...bookDetails, price: 1000 })
                                                    e.target.value=e.target.value.slice(0,-1)
                                                    console.log("Not a number")
                                                }
                                                else{
                                                setBookDetails({ ...bookDetails, price: e.target.value })
                                                }
                                        }}
                                        required
                                    /></p>
                            </div>
                            <div className="featured-form">
                                <p><label>Featured?</label>
                                    <input type="checkbox"
                                        className="featured-checkbox"
                                        checked={bookDetails.featured}
                                        onChange={() => {
                                            
                                            setBookDetails({ ...bookDetails, featured: !bookDetails.featured })
                                        
                                        }}
                                    />
                                </p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            
        </section>
    )
}

export default Admin
