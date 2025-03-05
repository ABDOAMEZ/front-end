import React, { useState } from 'react';

const ChangingPassword = () => {
    return(
        <div className="changePassword-container">
        <div>
            <label htmlFor="">
                password
            </label>
            <input type="password" placeholder='new password' />
        </div>
        <div>
            <label htmlFor="">
                confirm password
            </label>
            <input type="password" placeholder='confirm password' />
        </div>
        <div>
            <button type='button'>
                change password
            </button>
        </div>
      </div>
    );
}


const Body = () => {



  return (

    <div className='verfication-body'>
      <div className="verfivation-container">
      <p>We'll send a code to</p>
      <p> <span>abdenassaramezianeelhassani@gmail.com</span> to sign you in.</p>

      <div className="input-box">
        <input type="text" placeholder="Enter code" />
        <button type='button'>
            Sing in
        </button>
      </div>
      </div>

      <div className='confirmationCode-container'>
        <ChangingPassword />
      </div>

      
    </div>
    
  )
}

export default Body
