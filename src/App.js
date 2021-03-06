import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// Amplify
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
//import { Link } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { PhoneNumberField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
//import { Card } from '@aws-amplify/ui-react';
// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from './pages/Admin';
import { I18n } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { CheckboxField } from '@aws-amplify/ui-react';

//import { Flex } from '@aws-amplify/ui-react';
//import { Button } from '@aws-amplify/ui-react';
// Components
import Header from "./components/Header";
import AdminSuccess from "./pages/AdminSuccess"
//import { useParams } from "react-router";
import UpdateDoctorButton from './components/UpdateDoctorButton.js';
import UpdateDoctor from './pages/UpdateDoctor'
import DoctorSuccess from './pages/DoctorSuccess'
import CheckoutSuccess from './pages/CheckoutSuccess'
import CheckoutFailed from './pages/CheckoutFailed'
import Orders from './pages/Orders'
//var x=true

/* function User() {

  let { id } = useParams();
  let {url}=useParams();
  if ({url}==="admin")
  {
    x=!x
  }
  return <h2>User {id}{url}</h2>;
} */

Amplify.configure(awsExports);
I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Log in', // Tab header
  'Sign in': 'Log in', // Button label
  'Sign in to your account': 'Welcome Back!',
  Email: 'Enter your email', // Username label
  Password: 'Enter  password (at least 8 characters)', // Password label
  'Forgot your password?': 'Forgot Password? Reset',
  'Phone Number': 'Enter 10 digit mobile number',
  'Reset your password': 'Forgot your password?',
  'Enter your email': 'Enter your Email id',
  'Send code': 'Reset my password',
  'Back to Sign In': 'Back to Login',
  
});

const App = () => {
  //const [mobile, setmobile] = useState("");
  //const [isError, setIsError] = useState(false);
  //const { user } = useAuthenticator(context => [context.user]);
  //const history = useHistory();

  var v=false
  const [userh,setUserh]=useState(true)
  //const { user, signOut } = useAuthenticator((context) => [context.user]);
/*   useEffect(()=>{
  const ionViewCanEnter=async()=> {
    try{
      console.log('here')
        var v=await Auth.currentAuthenticatedUser();
        console.log('dsdsd',v,'dsdsdsd')
        setUserh(true);
    } catch{
      console.log('false')
      
      setUserh(false);

    }
  }
    ionViewCanEnter()
},[userh]) */
  //var userh=true
  const checkUser=async()=> {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
  } catch {
      return false;
  }

  }
  console.log('function')
  
  var x=Auth.currentAuthenticatedUser().then(user => console.log({ user }))
.catch(err => console.log(err))
  useEffect(()=>{
    const f=()=>{
      checkUser().then(
        function(result){
          // do something with result
          console.log(result)
          if (result)
          {
            setUserh(true)
          }
          else{
            setUserh(false)
          }
        }
      )
    } 
  f()
  console.log(checkUser())
 
},[x])


const reload=()=>
{
  Auth.currentAuthenticatedUser().then(user => console.log({ user }))
  .catch(err => {console.log(err,userh,'er')
                if(userh)
                {
                  
                  //window.location.reload(true)
                }
  })
  

  
}

  return (
    <>
    {false?
    <header className="main-head" style={{marginBottom:50}}>
            <nav>
                {/* <h1 id="logo">AMITA</h1> */}
                <h1 id='logo'>
                    <a href="https://amitacare.github.io/source/">
                    <img src='https://www.amitacare.com/wp-content/uploads/2021/10/cropped-image-144x66.png'
                    style={{backgroundColor:'red',paddingLeft:20}}
                    alt="logo"
                    ></img>
                    </a>
                </h1>
                <ul >
                    <li >
                        <a href="https://amitacare.github.io/source/">Home</a>
                    </li>
                    <li>
                        <a href="https://amitacare.github.io/source/">Doctors</a>
                    </li>
                    <li>
                        <a  href="https://amitacare.github.io/source/">Login</a>
                    </li>
                    <li>
                        <a href="https://amitacare.github.io/source/" >Checkout</a>
                    </li>
                    

                </ul>
            </nav>
        </header>:
        <
          
        ></>
      }
      <div className='fontk'>
    <Authenticator
    
    // Default to Sign Up screen
    initialState="signIn"
    signUpAttributes={[
      
      'birthdate',
      'email',
      
      'gender',
      
      'locale',
      
      'name',
      
      'custom:phone',
      'picture',
      
      
      'updated_at',
      
      'zoneinfo',
    ]}
    
    //signUpConfig={ ['defaultCountryCode'= 61]}
    // Customize `Authenticator.SignUp.FormFields`
    components={{
      SignUp: {
        FormFields() {
          
            
          const { validationErrors } = useAuthenticator();
          
          return (
            <>
              {/* Re-use default `Authenticator.SignUp.FormFields` */}
              <Authenticator.SignUp.FormFields />
              
                <PhoneNumberField defaultCountryCode="+91" 
                label="Phone" 
                labelHidden={false}
                placeholder="10 digit Mobile Number"
                name='custom:phone'  
                isRequired={true}
                errorMessage='Mobile Number must be 10 digits'
                onChange={(e) => {
                  
                  if (e.target.value.length !== 10 || /[^0-9]/g.test(e.target.value)) {
                    v=true
                  }
                  else
                  {
                    v=false
                  }
                }
                }
                hasError={v}
                
                />
                 
              
              
              {/* Append & require Terms & Conditions field to sign up  */}
              <CheckboxField
                errorMessage={validationErrors.acknowledgement}
                hasError={!!validationErrors.acknowledgement}
                name="acknowledgement"
                value="yes"
                label="I agree with the Terms & Conditions"
              />
            </>

          );
        },
      },
    }}
    services={{
      async validateCustomSignUp(formData) {
        
        if (!formData.acknowledgement) {
          return {
            acknowledgement: 'You must agree to the Terms & Conditions',
          };
        }
      },
    }}
    style={{}}
    >
      
      {({ signOut, user }) => (
        
        <main>
          {//(!userh)?
          //window.location.reload(true):<></>
          }
          <Router>
            <Header user={user} signOut={signOut}/>
            
            
            <Switch>
              <Route exact path="/backend/">
                <UpdateDoctorButton user={user}/>
                <Home />
              </Route>
              <Route path="/backend/cart">
                <Cart />


              </Route>
              <Route path="/backend/orders">
                <Orders />


              </Route>
              <Route path="/backend/checkout/success">
                < CheckoutSuccess user={user}/>
              </Route>
              <Route path="/backend/checkout/failed">
                < CheckoutFailed user={user}/>
              </Route>
              <Route path="/backend/checkout">
                <Checkout />
              </Route>
              <Route exact path="/backend/doctors">
                <Books />
              </Route>
              <Route
                path="/backend/doctors/:id"
                children={<BookDetails></BookDetails>}>
              </Route>
              <Route path="/backend/admin/create-doctor/success">
                <AdminSuccess user={user}/>
              </Route>
              <Route path="/backend/admin/create-doctor">
                <Admin user={user}/>
              </Route>
              <Route path="/backend/admin">
                <Admin user={user} />
              </Route>
              <Route path="/backend/doctor/update-profile/success">
                < DoctorSuccess user={user}/>
              </Route>
              <Route path="/backend/doctor/update-profile">
                <UpdateDoctor user={user}/>
              </Route>
              <Route path="/">
              <Redirect to="/backend" />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
          
          
    </main>
    )}
    </Authenticator>
    {(userh)?
          
          reload()
          :<></>}
    </div>
   </>
  );
}

export default App;
