import React, { useState } from 'react';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Enter Email | 2: Enter Code | 3: Reset Password
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sentCode, setSentCode] = useState(null); // Simulated verification code
  const [message, setMessage] = useState("");

  

  // Function to send a verification code
  const sendVerificationCode = () => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code
    setSentCode(generatedCode);
    setMessage(`${email}`);
    setStep(2);
  };

  // Function to verify the entered code
  const verifyCode = () => {
    if (parseInt(code) === sentCode) {
      setMessage("Code verified successfully. Enter your new password.");
      setStep(3);
    } else {
      setMessage("Incorrect code. Please try again.");
    }
  };

  // Function to update the password
  const updatePassword = () => {
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Password updated successfully!");
    setStep(1);
    setEmail("");
    setCode("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Password</h2>
      {message && <p className="message"> Verification code sent to <h3>{message}</h3></p>}

      {step === 1 && (
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendVerificationCode}>Send Code</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Verification Code</label>
          <input
            type="text"
            placeholder="Enter the verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyCode}>Verify</button>
          <button onClick={sendVerificationCode}>Resend Code</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={updatePassword}>Update Password</button>
        </div>
      )}
    </div>
  );
};


const Body = () => {



  return (

    <div className='verfication-body'>
      <div className="verfivation-container">
      


      </div>

      <div className='confirmationCode-container'>
        <ForgotPassword />
      </div>

      
    </div>
    
  )
}

export default Body
