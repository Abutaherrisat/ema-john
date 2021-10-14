import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className ="login-form">
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder ="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder ="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder ="Re-enter password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-------or------</div>
                <button className ="btn-regular">Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Register;