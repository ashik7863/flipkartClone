import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import loading from '../../../loader/loading.gif'

const LoginDialog = ({ open, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleReg, setVisibleReg] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setVisibleReg(false);
  };
  const [registration, setRegistration] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [login, setLogin] = useState({
    logEmail:"",
    logPassword: "",
  });
  const changeValue = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const changeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const successNotification = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function validateForm() {
    const { firstname, lastname, username, email, password, phone } =
      registration;
    if (firstname === "") {
      toast.error("First name must be more than 3 character!", toastOption);
      return false;
    } else if (lastname === "") {
      toast.error("last name must be more than 3 character!", toastOption);
      return false;
    } else if (username.length < 3) {
      toast.error("Username must be more than 3 character!", toastOption);
      return false;
    } else if (email === "") {
      toast.error("Email is required!", toastOption);
      return false;
    } else if (phone === "" || phone.length !== 10) {
      console.log(phone.length)
      toast.error("Mobile No Should be 10 Character!", toastOption);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password must be equal or more than 8 character!",
        toastOption
      );
      return false;
    }
    return true;
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const { firstname, lastname, username, email, password, phone } =
        registration;
      const {data} = await axios.post("https://flipkartbackend-production-cbba.up.railway.app/signup", {
        firstname,
        lastname,
        username,
        email,
        password,
        phone,
      });
      console.log(data.msg);
      if (data.status === false) {
        setIsLoading(false);
        toast.error(data.msg, toastOption);
        console.log('False');
      }
      if (data.status) {
        console.log('True');
        toast(data.msg, successNotification);
        setIsLoading(false);
      }
    }
  };
  function validateLogin() {
    const { logEmail,logPassword} =login;
    if (logEmail === "") {
      toast.error("Email is required!", toastOption);
      return false;
    } else if (logPassword === "") {
      toast.error("Password is required!", toastOption);
      return false;
    }
    return true;
  }
  const onLogin = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      setIsLoading(true);
      const { logEmail,logPassword } =login;
       
      const {data} = await axios.post("https://flipkartbackend-production-cbba.up.railway.app/login", {
        logEmail,logPassword
      });
      if (data.status === false) {
        setIsLoading(false);
        toast.error(data.msg, toastOption);
      }
      if (data.status) {
        setIsLoading(false);
        setOpen(false);
        setVisibleReg(false);
        toast(data.msg, successNotification);
      }
    }
  };
  

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
      {isLoading && (
              <>
                <img src={loading} alt="loader" className="loader" style={{width:200,position:'absolute',marginLeft:'30%'}}/>
              </>
            )}
      <div className="login-panel">
      
        {!visibleReg ? (
          <>
            <div className="login-left">
              <span
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                Login
              </span>
              <span
                style={{
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#dbdbdb",
                }}
              >
                Get access to your Orders, Wishlist and Recommendations
              </span>
            </div>
            <div className="login-right">
              <div>
                <input
                  type="text"
                  placeholder="Enter Email/Mobile number"
                  name="logEmail"
                  onChange={(e) => changeLogin(e)}
                />
              </div>
              <div>
                <input type="text" placeholder="Enter Password" name="logPassword" onChange={(e) => changeLogin(e)} />
              </div>
              <div style={{ color: "#878787", fontSize: "10px" }}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </div>
              <button style={{ cursor: "pointer" }} onClick={(e)=>onLogin(e)}>Login</button>
              <div style={{ textAlign: "center", marginTop: "5px" }}>OR</div>
              <div className="resend-btn">
                <div>Resend OTP</div>
              </div>
              <div
                style={{
                  marginTop: "76%",
                  color: "#2874f0",
                  fontWeight: 500,
                  fontSize: "13px",
                  width: "110%",
                  cursor: "pointer",
                }}
                onClick={() => setVisibleReg(true)}
              >
                New to Flipkart? Create an account
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="login-left">
              <span
                style={{
                  fontSize: "27px",
                  color: "#fff",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "18px",
                }}
              >
                Looks like you're new here!
              </span>
              <span
                style={{
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#dbdbdb",
                }}
              >
                Sign up with your mobile number to get started
              </span>
            </div>
            <div className="login-right">
              <div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstname"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastname"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Mobile"
                  name="phone"
                  onChange={(e) => changeValue(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => changeValue(e)}
                />
              </div>

              <div style={{ color: "#878787", fontSize: "10px" }}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </div>
              <button style={{ cursor: "pointer" }} onClick={(e) => onSubmit(e)}>
                Continue
              </button>
              <div className="resend-btn">
                <div onClick={() => setVisibleReg(false)}>
                  Existing User? Log in
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
    </Dialog>
    <ToastContainer />
    </div>
  );
};

export default LoginDialog;
