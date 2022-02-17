import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Doctors</h2>
            <h3 
            style={{backgroundColor:'#715453' ,
                    margin:20,
            }}
            >The good life is a process, not a state of being.<br /> It is a direction not a destination.</h3>
            <Link className="btn" to="/backend/doctors">View All Doctors</Link>
        </section>
    )
}

export default Hero
