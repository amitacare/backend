import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import doc from './doctor.jpg'

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
    <section className="book-details" style={{marginTop:10,display:'flex',flexDirection:'row'}}>
      <div className="detail-image" style={{width:'40%'}}>
        {url?
        <img src={url} alt="doctor profile" 
        style={{
          width:'100%',
        }}
        />
        :
        <>
        <img src={doc}alt="doctor profile" 
        style={{
          width:'100%',
        }}/>
        
        </>
      }
      </div>
      <div className="detail-description" style={{backgroundColor:'white',textAlign:'left',width:'40%'}}>
      
        <div style={{display:'flex',width:'100%',flexDirection:'row',backgroundColor:'yellow',padding:2}}>
          <div style={{backgroundColor:'white',textAlign:'justify',width:'100%',paddingLeft:20}}>
            <h3>Name:</h3>
            <h3>Experience:</h3>
            <h3>Speciality:</h3>
            
          </div>
          <div style={{backgroundColor:'white',textAlign:'justify',width:'100%',}}>
            <h3>Dr. {name}</h3>
            <h3>{experience}</h3>
            <h3>{speciality}</h3>
            
          </div>
        </div>
        <h4>Price:&nbsp;&nbsp;  &#8377;{price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...book, id });
            history.push("/backend/cart");
          }}
        >
          <h4>Add to Cart</h4>
        </button>
      </div>
    </section>
  );
};

export default BookDetails;
