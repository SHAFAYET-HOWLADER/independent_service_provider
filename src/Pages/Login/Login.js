import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FaArrowRight } from 'react-icons/fa';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../Shared/Header/Loading/Loading';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateToRegister = ()=>{
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
      if(user){
        navigate('/home')
      }
      let showError;
      if(error){
        showError = <p className='text-danger'>
            Error: {error.message};
        </p>
      }
      let showLoading;
      if(loading){
        showLoading = <Loading></Loading>
      }
      const signInHandler = (event)=>{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         signInWithEmailAndPassword(email, password)
      }
      const resetPassword = async ()=>{
        const email = emailRef.current.value;
        if(email){
         await sendPasswordResetEmail(email);
         toast('Sent email');
        }
        else{
            toast("please input email")
        }
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
                        {showError}
                        {showLoading}
                        
                        <div className='refer_register'>
                            <p>New to Gymnasium ? <Link to='/register' onClick={navigateToRegister}>
                                <button>Register &nbsp; <FaArrowRight></FaArrowRight> </button>
                            </Link></p>
                        </div>
                        <div className='refer_register'>
                            <p>Forget password ? <Link to='/login' onClick={resetPassword}>
                                <button>Reset Here &nbsp; <FaArrowRight></FaArrowRight> </button>
                            </Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Login;