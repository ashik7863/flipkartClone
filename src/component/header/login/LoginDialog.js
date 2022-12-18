import React, { useState } from 'react'
import {Dialog} from '@mui/material';
const LoginDialog = ({open,setOpen}) => {
  const[visibleReg,setVisibleReg]=useState(false);
  const handleClose=()=>{
    setOpen(false);
    setVisibleReg(false);
  }
  const[registration,setRegistration]=useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  })
  const changeValue=(e)=>{
    setRegistration({...registration,[e.target.name]:e.target.value})
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className='login-panel'>
       {
        !visibleReg?
        <>
          <div className='login-left'>
          <span style={{fontSize:'28px',color: '#fff',fontWeight:500,display:'block',marginBottom:'20px'}}>Login</span>
          <span style={{fontSize:'16px',lineHeight:'150%',color:'#dbdbdb'}}>Get access to your Orders, Wishlist and Recommendations</span>
          </div>
          <div className='login-right'>
          <div><input type="text" placeholder='Enter Email/Mobile number' name="" id="" /></div>
          <div>
          <input type="text" placeholder='Enter Password' name="" id="" />
          </div>
          <div style={{color: '#878787',fontSize:'10px'}}>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
          </div>
          <button style={{cursor:'pointer'}}>Login</button>
          <div style={{textAlign:'center',marginTop:'5px'}}>OR</div>
          <div className='resend-btn'>
          <div>Resend OTP</div>
          </div>
          <div style={{marginTop:'76%',color: '#2874f0',fontWeight:500,fontSize:'13px',width:'110%',cursor:'pointer'}} onClick={()=>setVisibleReg(true)}>New to Flipkart? Create an account</div>
          </div>
          </>
        :<>
          <div className='login-left'>
          <span style={{fontSize:'27px',color: '#fff',fontWeight:500,display:'block',marginBottom:'18px'}}>Looks like you're new here!</span>
          <span style={{fontSize:'16px',lineHeight:'150%',color:'#dbdbdb'}}>Sign up with your mobile number to get started</span>
          </div>
          <div className='login-right'>
          <div><input type="text" placeholder='Enter First Name' name='firstname' onChange={(e)=>changeValue(e)}/></div>
          <div>
          <input type="text" placeholder='Enter Last Name' name='lastname' onChange={(e)=>changeValue(e)}/>
          </div>
          <div>
          <input type="text" placeholder='Enter Username' name='username' onChange={(e)=>changeValue(e)} />
          </div>
          <div>
          <input type="text" placeholder='Enter Email' name='email' onChange={(e)=>changeValue(e)}/>
          </div>
          <div>
          <input type="text" placeholder='Enter Mobile' name='mobile' onChange={(e)=>changeValue(e)}/>
          </div>
          <div>
          <input type="text" placeholder='Enter Password' name='password' onChange={(e)=>changeValue(e)}/>
          </div>
          
          <div style={{color: '#878787',fontSize:'10px'}}>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
          </div>
          <button style={{cursor:'pointer'}}>Continue</button>
          <div className='resend-btn'>
          <div onClick={()=>setVisibleReg(false)}>Existing User? Log in</div>
          </div>
          </div>
        </>
       }
      </div>
    </Dialog>
  )
}

export default LoginDialog
