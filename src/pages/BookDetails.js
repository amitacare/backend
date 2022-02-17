import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";

const BookDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  const book = books.find((book) => {
    return book.id === id;
  });
  if (!book) {
    return <h3>Loading...</h3>;
  }

  const { image: url, name,experience,speciality, price } = book;

  return (
    <section className="book-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{name}</h2>
        <p>{experience}</p>
        <h3>{speciality}</h3>
        <h4>Price - &#8377; {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...book, id });
            history.push("/backend/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default BookDetails;
