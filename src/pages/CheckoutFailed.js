import React from 'react'
import { useHistory } from 'react-router-dom';

function CheckoutFailed() {
  const history = useHistory();
const pushcart=()=>{
    history.push('/backend/cart')
}
  return (

    <div>
       
    
    
    
        <div style={{textAlign:'center',width:'100%',backgroundColor:'white',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',marginTop:20}}>
        
            
        
            
            <div className="main-container" style={{backgroundColor:'rgb(235, 61, 78,0.2)',height:250,width:'100%',display:'flex',textAlign:'center'}}>
            <h2 style={{textAlign:'center',marginTop:20,}}>Payment Failed</h2>
                <div className="check-container">
                    <div  className="check-background2" style={{backgroundColor:'rgb(235, 61, 78,1)'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"white"}} fill='white'   viewBox="0 0 329.26933 329" width="329pt">
                        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
                    </svg>
                    </div>
                    <div className="check-shadow2"></div>
                </div>
            </div>
    
            <div className='sfhtml' style={{marginTop:20,
                justifyContent:'center',display:'flex',flexDirection:'row',alignItems:'center',
                width:'100%'
            }}>
                <div className='sfbody'>
                    <div id="sfcontainer" style={{width:250,}}>
                        
                        <div id="sferror-box">
                            
                            <div className="sfface2">
                                <div className="sfeye"></div>
                                <div className="sfeye sfright"></div>
                                <div className="sfmouth sfsad"></div>
                            </div>
                            <div className="sfshadow sfscale"></div>
                            <div className="sfmessage">
                                <h1 className="sfalert sfh1">Error!</h1>
                                <p className='sfp'>oh no, something went wrong!</p>
                            </div>
                            <button className="sfbutton-box sfbutton" style={{width:200,
                            marginLeft:-40
                            }} onClick={()=>{pushcart()}}>
                                <div className="sfred sfh1">TRY AGAIN</div>
                            </button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        
    
        </div>
    
    
    </div>
  )
}

export default CheckoutFailed