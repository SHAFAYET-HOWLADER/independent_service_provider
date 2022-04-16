import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate('/register');
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
          navigate('/services')
      }
      const signInHandler = (event)=>{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         signInWithEmailAndPassword(email, password)
      }
    return (
        <section id="login">
            <div className='container'>
                <form className='form_area' on onSubmit={signInHandler}>
                  <h3>Please login </h3>
                    <div className='input_group'>
                        <label htmlFor='email'>You Email</label>
                        <input type='email' ref={emailRef} name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password'>You Password</label>
                        <input type='password' ref={passwordRef} name='password' id='password' placeholder='Your Password' />
                        <input className='my-4 login_btn' type='submit' value='Login' />
                        <div className='refer_register'>
                            <p>New to Gymnasium ? <Link to='/register' onClick={navigateToRegister}>
                                <button>Register &nbsp; <FaArrowRight></FaArrowRight> </button>
                            </Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Login;