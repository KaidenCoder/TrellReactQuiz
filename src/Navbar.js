import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <header>
            <ul  className="navbar">
                <li><Link to='/'>Play Quiz</Link></li>
                <li><Link to='/score'>Scores</Link></li>
            </ul>
        </header>
    )
}

export default Navbar