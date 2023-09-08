import React, { useState } from 'react'
import './Authenticate.css'
import Login  from './Login'
import Signup from './Signup'

function Authenticate() {
const [active, setActive] = useState("login");

const handlechange = () =>{
setActive(active === "login" ? "signup" : "login");

};

const handlchange = () =>{
  setActive(active === "signup" ? "login" : "signup");
  
  };


  return (
    <div className='authenticate'>
      <div className="auth_left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth_right">
        {active === "login" ? <Login/>: <Signup/> }
    
        <div className="auth_more">
        
          <span>
          {active === "login"? 
          (<>  Dont have an account? {" "} <button onClick={handlechange}>Sign up</button>  </>)
          :( <> Have an account? <button onClick={handlchange}>Log in</button>  </>)
          }

           
            </span>
        </div>
      </div>
    </div>
  )
}

export default Authenticate
