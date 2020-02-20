import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return(
            <nav>
                <Link to='/posts'>
                    <h1>Posts</h1>
                </Link>
            </nav>
        )
    }    
}
   

export default Nav;