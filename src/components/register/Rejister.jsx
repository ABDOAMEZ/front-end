import {
  useRegisterMutation,
} from "../../services/api/userApi";
import { toast } from "react-toastify";

import { useState } from "react";

import '../../styles/SingUpForm.css';

import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Rejister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  
  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const errorElements = {
      firstN: document.querySelector("#FirstNameError"),
      lastN: document.querySelector("#lastNameError"),
      email: document.querySelector("#emailError"),
      password: document.querySelector("#passwordError"),
      confirmPass: document.querySelector("#confirmPassError"),
    };

    const inputs = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPass: confirmPass,
    };

    const emailRegex =
      /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    Object.values(errorElements).forEach((element) => (element.innerHTML = ""));

    if (!inputs.firstName) {
      errorElements.firstN.innerHTML = "Please enter your full name";
      return;
    }

    if (!inputs.lastName) {
      errorElements.lastN.innerHTML = "Please enter your full name";
      return;
    }

    if (!inputs.email) {
      errorElements.email.innerHTML = "Please enter your email address";
      return;
    }

    if (!emailRegex.test(inputs.email)) {
      errorElements.email.innerHTML = "Please enter a valid email address";
      return;
    }

    if (!inputs.password) {
      errorElements.password.innerHTML = "Please enter a password";
      return;
    }

    if (!passwordRegex.test(inputs.password)) {
      errorElements.password.innerHTML =
        "Password must contain: 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)";
      return;
    }

    if (!inputs.confirmPass) {
      errorElements.confirmPass.innerHTML = "Please confirm your password";
      return;
    }

    if (inputs.password !== inputs.confirmPass) {
      errorElements.confirmPass.innerHTML = "Passwords do not match";
      return;
    }

    registerOperation();
  };

  const registerOperation = async () => {
    const registerdata = JSON.stringify({
      name: firstName + " " + lastName,
      email,
      password,
    });
    const response = await register(registerdata);
    console.log(response);
    if (response.data) {
      localStorage.setItem("USER_ACCESS_TOKEN", response.data.token);
      localStorage.setItem("USER_ID", response.data.user.id);
      toast("Hello Geeks");
      setFirstName("");
      setlastName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
      navigate('/', {state: response.data.user});
    }
  };

  return (
    <section className="register-section">
      <div className="bg"></div>
      <div id="register" className="register">
      <div className="heading">
        <h2>Sign Up</h2>
      <p>Create an account to access all the features of MegaShop.</p></div>
        <form onSubmit={handleRegister} action="">
          <div className="name">
            <div className="first-name">
              <label htmlFor="">First Name *</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span id="FirstNameError" className="error-message"></span>
            </div>
            <div className="last-name">
            <label htmlFor="">Last Name *</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <span id="lastNameError" className="error-message"></span>
          </div>
            
          </div>

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

          <div className="confirme-pass">
            <label htmlFor="">Confirme Password *</label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <span id="confirmPassError" className="error-message"></span>
          </div>

          <div className="sbumit">
            <button type="submit">
              Sing up
              <span>
                <GoArrowRight className="icon" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Rejister;
