import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) return handleError('⚠️ Name, email, and password are required');

        try {
            const response = await fetch(`http://localhost:8080/auth/signup`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();

            if (result.success) {
                setSignupInfo({ name: '', email: '', password: '' });
                handleSuccess("✅ Signup successful! Redirecting to login...");
                setTimeout(() => navigate('/login'), 2000);
            } else {
                handleError(result.message);
            }
        } catch (err) {
            handleError("❌ Failed to sign up. Check your connection.");
        }
    };

    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input type='text' name='name' placeholder='Name' onChange={handleChange} value={signupInfo.name} />
                <input type='email' name='email' placeholder='Email' onChange={handleChange} value={signupInfo.email} />
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={signupInfo.password} />
                <button type='submit'>Signup</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;
