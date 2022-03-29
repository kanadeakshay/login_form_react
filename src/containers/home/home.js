import React, { useState } from 'react'
import Heading from '../../components/Heading/heading';
import Input from '../../components/Input/Input';
import './home.css'

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loginCredential, setLoginCredential] = useState({
        load: false
    });

    const validatePassword = (password) => {
        var expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,9}$/;
        if (expression.test(password)) {
            return true;
        } else return false;
    }


    // on submit function
    const login = (e) => {
        // prevent default refresh of form
        e.preventDefault();
        // if password and confirm password are wrong then display message
        if (validatePassword(password)) {
            if (password != confirmPassword) {
                setError("Password is not matching");
            } else {
                // storing data in new object
                const loginData = { load: true, name, email, password, confirmPassword };
                setLoginCredential(loginData);

                // resetting input fields as blank again after submitting of form
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setError("");
            }
        }
        else {
            setError("Password should at least contain one Uppercase, lowercase, number and a special character")
        }
    }

    return (
        <>
            <div className='main'>
                {/* conditional rendering depending upon did user filled the the form or not */}
                {
                    loginCredential.load === false ?
                        <div className='form-content'>
                            <Heading heading="Login Form" />

                            <form action='' onSubmit={login}>
                                <Input htmlFor="name" type="text" name="name" id="name"
                                    value={name} label="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input htmlFor="email" type="email" name="email" id="email"
                                    value={email} label="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input htmlFor="password" type="password" name="password" id="password"
                                    value={password} label="Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                                <span className='precaution'>Password should contain one special <br />
                                    character, uppercase and lowercase characer and one numeric</span>

                                <Input htmlFor="confirmPassword" type="password" name="confirmPassword" id="confirmPassword"
                                    value={confirmPassword} label="Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                {/* displaying error message if both password did not matched */}
                                {
                                    error === "" ?
                                        "" :
                                        <div className='msg'>
                                            <h4 className='error-msg'>{error}</h4>
                                        </div>
                                }
                                <div className='btn'>
                                    <button type='submit'>Login</button>
                                </div>
                            </form>
                        </div>

                        :

                        // display the credentials that are entered 
                        <div className='details'>
                            <Heading heading="Login Credentials" />
                            <p><span>Your Name</span> - {loginCredential.name}</p>
                            <p><span>Your email</span> - {loginCredential.email}</p>
                            <div className='btn'>
                                <button onClick={() => window.location.reload()}>Home Page 🏠</button>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Home