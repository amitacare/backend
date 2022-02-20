import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import doctor from './doctor.jpg'
import { BookContext } from "../context/books";

const Home = () => {
    const { featured } = useContext(BookContext);
    if (!featured.length) {
        return <h3>No Featured Doctors</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3 style={{textDecoration:'underline'}}>Featured Doctors</h3>
                </header>
                <div className="books featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <Link to={`/backend/doctors/${id}`}>
                            <div className="book-image">
                                {image?
                                
                                    <img src={image} alt="Not Found" onError={
                                        () => console.log("imageerror")} />
                                    :
                                    <img src={doctor} alt="Not Found" onError={
                                        () => console.log("imageerror")} />
                                }
                            </div>
                            </Link>
                            <Link to={`/backend/doctors/${id}`} className="btn book-link">details</Link>
                        </article>
                    ))}
                </div>
        </section>   
        <div style={{borderRadius:5,
            
            textAlign:'center',
            marginBottom:50,
            marginTop:40,
            }}>
            <Link className="btn" to="/backend/doctors"
            style={{borderRadius:5,
            
            }}
            >View All Doctors</Link>
        </div> 
        </>
    )
}

export default Home;