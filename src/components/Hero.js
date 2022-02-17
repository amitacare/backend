import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Doctors</h2>
            <h3 
            style={{backgroundColor:'rgb(113, 84, 83,0.4)' ,
            borderRadius:20,
                    margin:20,
            }}
            >The good life is a process, not a state of being.<br /> It is a direction not a destination.</h3>
            <Link className="btn" to="/backend/doctors"
            style={{borderRadius:5}}
            >View All Doctors</Link>
        </section>
    )
}

export default Hero
