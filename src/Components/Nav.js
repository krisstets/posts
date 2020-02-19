import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to='/posts'>
                <h1>Posts</h1>
            </Link>
        </nav>
    )
}

export default Nav;