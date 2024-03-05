import React from 'react';
import { Link } from 'react-router-dom'; 

function Dashboard(){
    return(
        <div className="app-container">
            <div className="header">
                <h1>Dashboard</h1>
                <h3>Welcome to the learning app!</h3>
                <p>Get started on your journey to becoming multilingual today.</p>
                <Link to="/dashboard" className="btn-primary">Explore Lessons</Link>
            </div>
        </div>
    ); 
}

export default Dashboard; 