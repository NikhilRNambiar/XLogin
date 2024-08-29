import React, { useState } from 'react';

function XLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (username === "user" && password === "password") {
            setMessage("Welcome, user!");
            setIsLoggedIn(true); 
        } 
       
        else {
            setMessage("Invalid username or password");
        }
    };

    return (
        <div >
            <h1>Login Page</h1>
            {isLoggedIn ? (
                <p>{message}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: '10px'}}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
                            required
                        />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
            {message && !isLoggedIn && <p style={{marginTop: '10px'}}>{message}</p>}
        </div>
    );
}

export default XLogin;
