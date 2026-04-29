import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <nav className="navbar-container">
            <div className="nav-brand">
                <Link to="/">THE <span>SIREN</span></Link>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bollywood'>Bollywood</Link></li>
                <li><Link to='/technology'>Technology</Link></li>
                <li><Link to='/hollywood'>Hollywood</Link></li>
                <li><Link to='/fitness'>Fitness</Link></li>
                <li><Link to='/food'>Food</Link></li>
            </ul>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? "Dark 🌙" : "Light ☀️"}
            </button>
        </nav>
    )
}

export default Navbar
