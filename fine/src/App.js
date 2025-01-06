import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default App;

