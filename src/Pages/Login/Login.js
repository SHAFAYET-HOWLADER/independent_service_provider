import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    const navigateToRegister = () => {
        navigate('/register');
    }
    return (
        <section id="login">
            <div className='container'>
                <form className='form_area'>
                  <h3>Please login </h3>
                    <div className='input_group'>
                        <label htmlFor='email'>You Email</label>
                        <input type='email' name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password'>You Password</label>
                        <input type='password' name='password' id='password' placeholder='Your Password' />
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