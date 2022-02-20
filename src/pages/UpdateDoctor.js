import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
//import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { updateDoctor } from '../api/mutations'
import {getDoctor} from '../api/queries'
import config from '../aws-exports'
import { useHistory } from 'react-router-dom';
const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config
var get=true

const UpdateDoctor = (props) => {
  const history = useHistory();

    
    const [image, setImage] = useState(null);
    //var now=new Date();
    //console.log(now);
    const [bookDetails, setBookDetails] = useState({
        
        name:'',
        experience:"",
        image:"null",
        speciality:'',
        featured:true,
        price:1000,
        
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ( !bookDetails.price) return
            await API.graphql(graphqlOperation(updateDoctor, { input: bookDetails }))
            
            console.log(bookDetails)
            
            history.push("/backend/doctor/update-profile/success")
        } catch (err) {
            console.log('error creating Doctor:', err)
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
    const [data,setData]=useState(null)
    const getdetails =async()=>{
        const details=await API.graphql({query:getDoctor,variables: { id: props.user.attributes.sub }})
        //console.log('details')
        
        //console.log(details)
        setData(details.data.getDoctor)
        //console.log(details.data?.getDoctor.id,details.data?.getDoctor.name)
        setImage( details.data.getDoctor.image || 'null');
        setBookDetails({...bookDetails,
            id:details.data?.getDoctor.id,
            name:props.user.attributes.name,
            image:details.data?.getDoctor.image,
            experience:details.data?.getDoctor.experience,
            speciality:details.data?.getDoctor.speciality,
            price:details.data?.getDoctor.price,
        })
        //console.log('data')
        
        //console.log(data)

   }
   useEffect(()=>{

    if(get===true && typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  !== "undefined")        
    {
        
        if(props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Doctors'
            
            )
        {
            getdetails()
            get=false
            console.log('getdetails')
        }

    }
    if(image==='null')
    {
        get=true
    } 
    //console.log(image)
   })
        
   /* const bookdata=()=>
   {
       console.log(bookDetails)
   } */
    
        

    return (
        <section className="admin-wrapper">
            
                <section>
                    
                    {(typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  === "undefined")?
                        <h2>You are unauthorized to access this page</h2>
                        :
                    
                        (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Doctors'
                        
                        )?
                        
                        <>  
                        
                            <header className="form-header" style={{marginTop:-10}}>
                                <h3>Update Doctor Profile</h3>
                            </header>
                            
                            <form className="form-wrapper" onSubmit={handleSubmit}>
                                

                                <div className="form-image">
                                    {image!=="null" ? 
                                    <>
                                        <div style={{display:'flex',flexDirection:'column',justifyContent:'top',textAlign:'center',marginBottom:10,}}>
                                            <img className="image-preview" src={image} alt="" 
                                            style={{marginBottom:10,
                                            width:'70%',
                                            marginLeft:'15%'
                                            
                                            }}/> 
                                            <div style={{backgroundColor:'white',textAlign:'center',justifyContents:'center',display:'flex', alignItems:'center',alignContent:'center',
                                            width:'70%',
                                            marginLeft:'15%'
                                        }}>
                                            <input
                                                type="file"
                                                accept="image/jpg"
                                                onChange={(e) => {
                                                    //console.log(e)
                                                    if(e.target.value)
                                                    {
                                                        handleImageUpload(e)
                                                    }
                                                    
                                                }
                                                } 
                                            />
                                            </div>
                                        </div>
                                    </>
                                    
                                    : 
                                    <input
                                        type="file"
                                        accept="image/jpg"
                                        onChange={(e) => 
                                        {
                                            if(e.target.value)
                                                    {
                                                        handleImageUpload(e)
                                                    }
                                        }} 
                                    />}

                                </div>
                                <div className="form-fields">
                                <div style={{display:'flex',flexDirection:'row',width:'100%',textAlign:'Left',marginLeft:'5%'}}>
                                    <div>
                                        <div style={{fontSize:20}}>Name:</div>
                                        <div style={{fontSize:20}}>Id: </div>
                                    </div>
                                    <div style={{marginLeft:10}}>
                                        <h2 style={{fontSize:20}}> Dr.{props.user.attributes.name}</h2>
                                        <h3 style={{fontSize:20}}>{props.user.attributes.sub}</h3>
                                    </div>
                                </div>
                                    <div className="title-form">
                                        <p><label htmlFor="experience">Experience</label></p>
                                        <p><input
                                            name="email"
                                            type="title"
                                            defaultValue={data?.experience}
                                            placeholder="Type the expereience in which fields"
                                            onChange={(e) => {
                                                //console.log(data.experience)
                                                setBookDetails({ ...bookDetails, experience: e.target.value })
                                                //console.log(bookDetails.experience)
                                                //bookdata()
                                            }}
                                            required
                                        /></p>
                                    </div>
                                    <div className="description-form">
                                        <p><label htmlFor="speciality">Speciality</label></p>
                                        <p><textarea
                                            name="description"
                                            type="number"
                                            rows="8"
                                            defaultValue={data?.speciality }

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
                                                defaultValue={data?.price }

                                                placeholder="What is the Price of one booking (INR)"
                                                onChange={(e) => 
                                                    {
                                                        //console.log(e.target.value)
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

export default UpdateDoctor
