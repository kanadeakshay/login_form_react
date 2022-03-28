import React, { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const [loginCredential, setLoginCredential] = useState({
        load: false
    });

    const login = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError("Password is not matching");
        } else {
            const loginData = { load: true, name, email, password, confirmPassword };
            setLoginCredential(loginData);

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError("");
        }
    }

    return (
        <>
            {
                loginCredential.load === false ?
                    <form action='' onSubmit={login}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" autoComplete='off'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" autoComplete='off'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" autoComplete='off'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" autoComplete='off'
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {
                            error === "" ?
                                "" : <h3>{error}</h3>
                        }

                        <button type='submit'>Login</button>
                    </form>

                    :

                    <div>
                        <p>Your Name -{loginCredential.name}</p>
                        <p>Your email - {loginCredential.email}</p>
                    </div>

            }




        </>
    )
}

export default Home