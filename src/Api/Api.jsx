import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fetchData, setFetchData] = useState(false); // New state for controlling fetch

    useEffect(() => {
        if (fetchData) {
            setLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [fetchData]);

    const handleClick = () => {
        setFetchData(true);
    };

    return (
        <div>
          
            <button onClick={handleClick}>API</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api;

