import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@aws-amplify/ui-react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
                    style={{backgroundColor:'red',paddingLeft:10}}
                    alt="logo"
                    ></img></a>
                    
                    <h2 style= {{marginLeft:10,color:'black',fontSize:20,backgroundColor:'white',padding:10}}>Book an Appointment</h2>
                    
                </div>
                <ul >
                    <li >
                        <Link to="/backend/"  style={{display:'flex',flexDirection:'row' }} >
                            <HomeIcon fontSize='inherit' style={{fontSize:28,}}></HomeIcon>
                            <p>Home</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/backend/cart" style={{display:'flex',flexDirection:'row' }}>
                        <ShoppingCartIcon fontSize='inherit' style={{fontSize:28,}}></ShoppingCartIcon>
                            <p>Cart</p>
                            </Link>
                    </li>
                    {/* <li>
                        <Link to="/backend/checkout" >Checkout</Link>
                    </li> */}
                    <Button onClick={props.signOut} style={{
                        backgroundColor:"#5546b8",padding:10,color:'white',
                        borderRadius:15,paddingLeft:20,paddingRight:20,marginBottom:5,
                        width:'auto',fontSize:20,
                        }}>Sign out</Button>

                </ul>
            </nav>
        </header>
    )
}

export default Header
