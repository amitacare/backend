import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';


const Books = () => {
    const { books } = useContext(BookContext);

    if (!books.length) {
        return <h3>No Books Available</h3>
    }

    return (
        <section className="books"style={{flexDirection:'column'}}>
            <h2 >All Doctors</h2>
            <>
            {books.map(({ image: image, id, name }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={name} />
                    </div>
                    <Link to={`/backend/doctors/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
            </>
        </section>
    )
}

export default Books
