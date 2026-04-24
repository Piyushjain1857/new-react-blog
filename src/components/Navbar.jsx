import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        </nav>
    )
}

export default Navbar
