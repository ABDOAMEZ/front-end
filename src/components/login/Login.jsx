import React from "react";
import { useLoginMutation } from "../../services/api/userApi";

import { useState } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const handelLogin = async (e) => {
      if(!localStorage.getItem('USER_ACCESS_TOKEN')){
        e.preventDefault();
      const loginData = JSON.stringify({
        email,
        password,
      });
      const response = await login(loginData);

      if (response.data.token) {
        localStorage.setItem("USER_ACCESS_TOKEN", response.data.token);
        localStorage.setItem("USER_ID", response.data.user.id);
        toast("Hello Geeks");
        setEmail("");
        setPassword("");
        console.log(response.data)
        navigate('/', {state : response.data.user})
      }
      return;
    }

    navigate('/')
    alert('already logged in')
  };

  return (
    <section className="register-section">
      <div className="bg"></div>
      <div id="register" className="register">
      <div className="heading">
        <h2>Sign In</h2>
      <p>Welecom Back to MegaShop Stor.</p></div>
        <form onSubmit={handelLogin} action="">


          <div className="email">
            <label htmlFor="">Email *</label>
            <input
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span id="emailError" className="error-message"></span>
          </div>

          <div className="password">
            <label htmlFor="">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span id="passwordError" className="error-message"></span>
          </div>



          <div className="sbumit">
            <button type="submit">
              Sing In
              <span>
                <GoArrowRight className="icon" />
              </span>
            </button>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

