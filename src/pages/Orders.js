import React, { useEffect } from 'react'
//import { listDoctors } from '../api/queries'
import { API, graphqlOperation } from "aws-amplify";
//import { BookContext } from '../context/books';
import {listCustomOrders,listOrders,listDoctors} from '../api/queries'

function Orders() {
    const orders = async ()=>{
        try{
            const alldoctors = await API.graphql({ query: listDoctors });
            console.log('alldoctors',alldoctors); 
        const allorders = await API.graphql({ query: listCustomOrders,authMode:'AMAZON_COGNITO_USER_POOLS'
        
    });
        console.log('allorders',allorders); 
        
        }
        catch(e)
        {
            console.log('error',e)
        }
    }
    useEffect(()=>{
        orders()
    })
    


  return (
    <div>
        <h2 style={{textAlign:'center',marginTop:25,textDecorationLine:'underline'}}>Orders</h2>

    </div>
  )
}

export default Orders