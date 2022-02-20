import React from 'react'
import { useHistory } from 'react-router-dom';
function CheckoutSuccess() {
  const history = useHistory();
  const pushcart=()=>{
    history.push('/backend/orders')
}
  return (
   



    <div style={{textAlign:'center',width:'100%',backgroundColor:'white',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',marginTop:20}}>
	
		
    
        
        <div className="main-container" style={{backgroundColor:'rgb(50, 168, 82,0.2)',height:250,width:'100%',display:'flex',textAlign:'center'}}>
        <h2 style={{textAlign:'center',marginTop:20,}}>Payment Successful</h2>
            <div className="check-container sfscale2">
                <div className="check-background "><div className='sfbounce2'>
                    
                        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
             </div>   
             <div className='sfshadow2 sfscale2'>
                
                </div>
            
        </div>

        <div className='sfhtml' style={{marginTop:20,backgroundColor:'white',
            
        }}>
            <div className='sfbody' style={{}}>
                <div id="sfcontainer" style={{width:250,}}>
                    <div id="sfsuccess-box">
                       
                        <div className="sfface sfbounce">
                            <div className="sfeye"></div>
                            <div className="sfeye sfright"></div>
                            <div className="sfmouth sfhappy"></div>
                        </div>
                        <div className="sfshadow sfscale"></div>
                        <div className="sfmessage">
                            <h1 className="sfalert sfh1">Success!</h1>
                            <p className='sfp'>Your Order is booked!</p>
                        </div>
                        <button className="sfbutton-box sfbutton" style={{width:200,
                        marginLeft:-40 
                        }} onClick={()=>{pushcart()}}>
                            <div className="sfgreen sfh1">View Orders</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    

    </div>


  )
}

export default CheckoutSuccess