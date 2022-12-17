import React from 'react'
import {Dialog} from '@mui/material';
const LoginDialog = ({open,setOpen}) => {
  const handleClose=()=>{
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className='login-panel'>
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
        <div style={{marginTop:'76%',color: '#2874f0',fontWeight:500,fontSize:'13px',width:'110%',cursor:'pointer'}}>New to Flipkart? Create an account</div>
        </div>
      </div>
    </Dialog>
  )
}

export default LoginDialog
