import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'


const Navbar = ({icon, title}) => {
  
   
        return (
            <nav className="navbar bg-primary">
                <h1>
                <FaGithub ></FaGithub> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    
}

Navbar.defaultProps={
    title: 'Github user Finder',

};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    
};

export default Navbar
