import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@aws-amplify/ui-react';

const Header = (props) => {
    console.log(props.user)
    return (
        <header className="main-head" >
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
                        <Link to="/" /* style={{color:'black'}} */>Home</Link>
                    </li>
                    <li>
                        <Link to="/books" /* style={{color:'black'}} */>Books</Link>
                    </li>
                    <li>
                        <Link to="/cart" /* style={{color:'black'}} */>Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout" >Checkout</Link>
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
