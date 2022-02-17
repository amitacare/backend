import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@aws-amplify/ui-react';

const Header = (props) => {
    console.log(props.user)
    return (
        <header className="main-head" >
            <nav>
                {/* <h1 id="logo">AMITA</h1> */}
                <div id='logo' style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row',
                }}>
                    <a href="https://amitacare.github.io/source/">
                    <img src='https://www.amitacare.com/wp-content/uploads/2021/10/cropped-image-144x66.png'
                    style={{backgroundColor:'red',paddingLeft:20}}
                    alt="logo"
                    ></img></a>
                    
                    <h2 style= {{color:'black',fontSize:20,backgroundColor:'white',padding:10}}>Book an Appointment</h2>
                    
                </div>
                <ul >
                    <li >
                        <Link to="/backend/" /* style={{color:'black'}} */>Home</Link>
                    </li>
                    <li>
                        <Link to="/backend/doctors" /* style={{color:'black'}} */>Doctors</Link>
                    </li>
                    <li>
                        <Link to="/backend/cart" /* style={{color:'black'}} */>Cart</Link>
                    </li>
                    <li>
                        <Link to="/backend/checkout" >Checkout</Link>
                    </li>
                    <Button onClick={props.signOut} style={{
                        backgroundColor:"#5546b8",padding:10,color:'white',
                        borderRadius:15,paddingLeft:20,paddingRight:20,
                        width:'auto',fontSize:20,
                        }}>Sign out</Button>

                </ul>
            </nav>
        </header>
    )
}

export default Header
