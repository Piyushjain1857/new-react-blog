import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bollywood'>Bollywood</Link></li>
                <li><Link to='/technology'>Technology</Link></li>
                <li><Link to='/hollywood'>Hollywood</Link></li>
                <li><Link to='/fitness'>Fitness</Link></li>
                <li><Link to='/food'>Food</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
