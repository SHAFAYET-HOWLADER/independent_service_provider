import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <section id="register">
            <div className='container'>
                <form className='form_area'>
                    <h3>Please Register </h3>
                    <div className='input_group'>
                        <label htmlFor='name'>You Name</label>
                        <input type='name' name='name' id='name' placeholder='Your Name' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='email'>You Email</label>
                        <input type='email' name='email' id='email' placeholder='Your Email' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor='password'>You Password</label>
                        <input type='password' name='password' id='password' placeholder='Your Password' />
                        <input className='my-4 login_btn' type='submit' value='Register' />
                        <div className='refer_register'>
                            <p>Already have an account ? <Link to='/login'>
                                <button>Login &nbsp; <FaArrowRight></FaArrowRight> </button>
                            </Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;