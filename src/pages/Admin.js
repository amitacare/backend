import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
//import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createDoctor} from '../api/mutations'
import config from '../aws-exports'
//import { display } from '@mui/system';
import { useHistory } from 'react-router-dom';
//import notAllow from '../components/notAllow';
const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = (props) => {
  const history = useHistory();

    const [image, setImage] = useState('null');
    //var now=new Date();
    //console.log(now);
    const [bookDetails, setBookDetails] = useState({
        
        name:'',
        experience:"",
        
        speciality:'',
        featured:true,
        price:1000,
        
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ( !bookDetails.price ) return
            await API.graphql(graphqlOperation(createDoctor, { input: bookDetails }))
            setBookDetails({
                id:'',
                name:'',
            experience:"",
            image:"null",
            speciality:'',
            featured:true,
            price:1000 })
            console.log(bookDetails)
            history.push("/backend/admin/create-doctor/success")
        } catch (err) {
            console.log('error creating Doctor:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        //console.log(e.target.files)
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
            console.log(key)
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
                    {(typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  === "undefined")?
                        <h2>You are unauthorized to access this page</h2>
                        :
                    
                        (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Admin')?
                        <>
                            <header className="form-header" style={{marginTop:-10}}>
                                <h3>Create Doctor Profile</h3>
                            </header>
                            
                            <form className="form-wrapper" onSubmit={handleSubmit}>
                                

                                <div className="form-image">
                                    {image ? 
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'top',textAlign:'center',width:'100%'}}>
                                        <img className="image-preview" src={image} alt="" style={{marginBottom:10}}/> 
                                        
                                        <input
                                            type="file"
                                            
                                            accept="image/jpg"
                                            onChange={(e) => handleImageUpload(e)} 
                                            style={{width:'100%'}}
                                        />
                                    </div>
                                    : 
                                    {/* <div style={{display:'flex',flexDirection:'column',
                                    justifyContent:'center',textAlign:'center',width:'100%',alignItems:'center'}}>

                                    <input
                                        type="file"
                                        accept="image/jpg"
                                        onChange={(e) => handleImageUpload(e)} 
                                        style={{width:'100%',backgroundColor:'red',}}

                                    />
                                    </div> */}
                                    
                                    }

                                </div>
                                <div className="form-fields">
                                <div className="title-form">
                                        <p><label htmlFor="name">Name</label></p>
                                        <p><input
                                            name="name"
                                            type="title"
                                            placeholder="Type the Name"
                                            onChange={(e) => setBookDetails({ ...bookDetails, name: e.target.value })}
                                            required
                                        /></p>
                                    </div>
                                    <div className="title-form">
                                        <p><label htmlFor="id">Id</label></p>
                                        <p><input
                                            name="id"
                                            type="title"
                                            placeholder="Type the Id"
                                            onChange={(e) => setBookDetails({ ...bookDetails, id: e.target.value })}
                                            required
                                        /></p>
                                    </div>
                                    <div className="title-form">
                                        <p><label htmlFor="experience">Experience</label></p>
                                        <p><input
                                            name="experience"
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
                                                defaultValue={1000}
                                                /* placeholder="What is the Price of one booking (INR)" */
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
                        </>
                        :
                        <h2>You are unauthorized to access this page</h2>   

                     
                    }
                </section>

                                        
        </section>
    )
}

export default Admin
