import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {PostsContext} from '../Context/postContext';

class Nav extends Component {
   // static contextType = PostsContext;
    render() {

       // const post = this.context
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