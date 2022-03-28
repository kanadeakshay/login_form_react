import React, { useState } from 'react'
import Input from '../../components/Input';

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const [loginCredential, setLoginCredential] = useState({
        load: false
    });

    // on submit function
    const login = (e) => {
        // prevent default refresh of form
        e.preventDefault();

        // if password and confirm password are wrong then display message
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

    return (
        <>
        {/* conditional rendering depending upon did user filled the the form or not */}
            {
                loginCredential.load === false ?
                    <form action='' onSubmit={login}>
                        <Input htmlFor="name" type="text" name="name" id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input htmlFor="email" type="email" name="email" id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input htmlFor="password" type="password" name="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input htmlFor="confirmPassword" type="confirmPassword" name="confirmPassword" id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {/* displaying error message if both password did not matched */}
                        {
                            error === "" ?
                                "" : <h3>{error}</h3>
                        }

                        <button type='submit'>Login</button>
                    </form>

                    :
                    
                    // display the credentials that are entered 
                    <div>
                        <p>Your Name -{loginCredential.name}</p>
                        <p>Your email - {loginCredential.email}</p>
                    </div>

            }
        </>
    )
}

export default Home