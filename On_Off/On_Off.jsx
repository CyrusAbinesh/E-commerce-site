import React, { useState } from 'react';
import './On_Off.css'
function On_Off() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div >
            <center>
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'ON' : 'OFF'}
            </button>
            </center>
        </div>
    );
}

export default On_Off;
