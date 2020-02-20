import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Nav extends Component {

    render() {
        return(
            <nav>
                <Link to='/posts'>
                    <h1 className='nav-header'>Posts</h1>
                </Link>
            </nav>
        )
    }    
}
   

export default Nav;