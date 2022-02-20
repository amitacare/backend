/* import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listCustomOrders } from "../api/queries";
import { processOrder } from "../api/mutations";

const OrderContext = React.createContext();

const OrderProvider = ({ children })=> {
    const [books, setOrders] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchorders();
      }, []);

      const fetchorders = async () => {
        try {
          setLoading(true);
          // Switch authMode to API_KEY for public access
          const { data } = await API.graphql({
            query: listCustomOrders,
            authMode: "AMAZON_COGNITO_USER_POOLS"
          });
          console.log(data,'data')
          const books = data.listCustomOrders.items;
          const featured = books.filter((book) => {
            return !!book.featured;
          });
          setOrders(books);
          setFeatured(featured);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      console.log('insiedorerf')
  return (
    
    <OrderContext.Provider value={{ books, featured, loading,  }}>
      {children}
    </OrderContext.Provider>
  )
}

export  { OrderContext, OrderProvider }; */

/* import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listDoctors } from "../api/queries";
import { processOrder } from "../api/mutations";

const OrderContext = React.createContext();

const OrderProvider = ({ children }) => {
  const [books, setOrders] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
      return true
    } catch (err) {
      console.log(err);
      return false
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listDoctors,
        authMode: "API_KEY"
      });
      const books = data.listDoctors.items;
      console.log(books,'books')
      
      setOrders(books);
      
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <OrderContext.Provider value={{ books,  loading, checkout }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
 */