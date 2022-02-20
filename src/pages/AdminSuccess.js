import React from 'react'

const AdminSuccess=(props)=> {
	console.log(props,'success')
  return (
    <div style={{textAlign:'center'}}>
	
		{(typeof (props.user.signInUserSession.accessToken.payload["cognito:groups"])  === "undefined")?
                        <h2>You are unauthorized to access this page</h2>
                        :
                    
                        (props.user.signInUserSession.accessToken.payload["cognito:groups"][0]==='Admin')?
                        <>
        <h2 style={{backgroundColor:'white',textAlign:'center',marginTop:50,}}>Created Doctor Successfully</h2>
        <div className="main-container" >
	<div className="check-container">
		<div className="check-background">
			<svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
		<div className="check-shadow"></div>
	</div>
</div>
</>
:
<h2>You are unauthorized to access this page</h2>
}
    </div>
  )
}

export default AdminSuccess