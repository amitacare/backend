import React from 'react'
import { Link } from 'react-router-dom'

function UpdateDoctorButton(props) {
    //console.log(props.user.signInUserSession.accessToken.payload["cognito:groups"][0])
  return (
    <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row',margin:10,alignItems:'center' , 
            marginBottom:10,
          }}>
              <h1 style={{marginLeft:'5%'}}>Hello &nbsp;
                { ( typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  === "undefined")?
                    //console.log("kjcdbkjdsc")
                    
                  <>
                  {props.user.attributes.name}!
                  </>
                  :
                  (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Doctors')?
                
                  <>
                  Dr. {props.user.attributes.name}!
                  </>
                  
                  
                  :
                  (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Admin')?
                
                  <>Admin!</>
                  
                  :
                  <></>
              
                }
              </h1>
              {
                ( typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  === "undefined")?
                    //console.log("kjcdbkjdsc")
                    
                  <>
                  
                  </>
                  :
                (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Doctors')?
                
                  
                  <Link to="/backend/doctor/update-profile"
                  className="btn" style={{marginRight:'5%'}} >
                    Update Doctor Profile
                  </Link>
                  
                  :
                  (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Admin')?
                
                  
                  <Link to="/backend/admin/create-doctor"
                  className="btn" style={{marginRight:'5%'}} >
                    Create Doctor Profile
                  </Link>:
                  <></>
              }   
            </div>
  )
}

export default UpdateDoctorButton