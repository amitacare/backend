import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';
import doctor from './doctor.jpg'

const Books = () => {
    const { books } = useContext(BookContext);

    if (!books.length) {
        return <h3>No Books Available</h3>
    }

    return (
        <section className="featured" style={{}}>
            <h2 style={{marginBottom:5,width:'100%',textAlign:'center'}}>All Doctors</h2>
            
            <div className="books featured-list ">
            {books.map(({  image, id, name }) => (
                <article key={id} className="book featured-book">
                    <Link to={`/backend/doctors/${id}`}>
                    <div className="book-image" >
                        {image?
                        
                        <img src={image} alt="Not Found" onError={
                            () => console.log("imageerror")} />
                            :
                        <img src={doctor} alt="Not Found" onError={
                            () => console.log("imageerror")} />
                        }
                    </div>
                    </Link>
                    <Link to={`/backend/doctors/${id}`} className="btn book-link"
                    style={{maxHeight:60}}
                    >details</Link>
                </article>
            ))}
            </div>
        </section>
    )
}

export default Books
