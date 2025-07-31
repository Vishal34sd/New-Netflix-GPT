import React from 'react';
import Header from '../components/Header';
import { useState, useRef } from 'react';
import { isValidateForm } from '../utils/validateForm';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const changeSignInHndler = () => {
    setIsSignInForm(!isSignInForm);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const msg = isValidateForm(email.current.value, password.current.value);
    setErrorMsg(msg)
  }


  return (
    <div className="relative w-full h-screen">
      <img
        src="netflix_bg_new.png"
        alt="background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="relative z-10">
        <Header />
      </div>
      <form onSubmit={submitHandler} className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 p-8 rounded-lg flex flex-col gap-4 w-80 shadow-lg text-white">
        {isSignInForm ? <h2 className="text-white text-2xl font-bold mb-4 text-center">Sign In</h2> :
          <h2 className="text-white text-2xl font-bold mb-4 text-center">Register Now</h2>}
        {isSignInForm ? null :
          <input
            type="text"
            placeholder="Usernmae"
            className="p-2 rounded bg-gray-600 bg-opacity-60 text-white placeholder-gray-400 focus:outline-none"
          />}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 rounded bg-gray-600 bg-opacity-60 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-600 bg-opacity-60 text-white placeholder-gray-400 focus:outline-none"
        />
        <p>{errorMsg}</p>
        {isSignInForm ? <button type="submit" className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded">Sign In</button> :
          <button type="submit" className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded">Sign Up</button>}
        {isSignInForm ? <p className="text-[15px] cursor-pointer hover:text-blue-400" onClick={changeSignInHndler}>Don't have a account ? Sign Up now.</p> :
          <p className="text-[15px] cursor-pointer hover:text-blue-400" onClick={changeSignInHndler}>Already have a account? Just Sign in.</p>
        }
      </form>

    </div>
  );
};

export default Login;
