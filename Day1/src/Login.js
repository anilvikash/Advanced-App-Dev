import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "./Redux/userSlice";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const nav = useNavigate();

    const formData = { email, password };

    const routeregister = () => {
        nav('/Register');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = "Username is required";
        }
        if (!password.trim()) {
            validationErrors.password = "Password is required";
        } else if (password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        } else {
            // Assuming login logic here instead of axios call
            // Dispatching login action
            dispatch(login(email));
            // Redirecting to Home page
            nav('/Home');
        }

        setErrors(validationErrors);
    };

    return (
        <div className='center'>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='email'>
                    <label>Email
                        <input type="name" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <h6>{errors.email && <span>{errors.email}</span>}</h6>
                </div>
                <div className='password'>
                    <label>Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <h6>{errors.password && <span>{errors.password}</span>}</h6>
                </div>
                <div className='submitbutton'>
                    <button type="submit">Submit</button>
                    <p className='p'>If you don't have an account?</p>
                    <button type='button' onClick={routeregister}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
