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
        <div className="landing-container">
            <header className="header">
                <h1>Welcome to Our App</h1>
                <p>Your one-stop solution for all your needs</p>
            </header>

            <main className="main-content">
                <section className="data-section">
                    <h2>Data from Server</h2>
                    {data ? <p>{data}</p> : <p>Loading...</p>}
                </section>
                
                <section className="about-section">
                    <h2>About Our Application</h2>
                    <p>Our application integrates React with Flask to provide seamless interactions and smooth user experiences. We're committed to delivering high-quality services to our users.</p>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;

