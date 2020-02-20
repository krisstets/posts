import React from 'react';
import axios from 'axios';
import './style.css';


import {PostsContext} from '../Context/postContext';


export default class PostInfo extends React.Component {

    static contextType = PostsContext;

    constructor(props) {
        super(props);
        this.state = {
            post: [], 
            user: []
        }
    }

    matchParams = this.props.match.params
    
    componentDidUpdate() {
        if(this.state.post.length === 0) {
          this.setState({ 
                post: this.context.posts.filter(post => post.id === parseInt(this.matchParams.postId))[0]
            })
          
       } 
    }
    
    componentDidMount() {
        try {
            axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ 
                user: res.data.filter(user => user.id === parseInt(this.matchParams.userId))[0] 
            });
         });
        } catch(error) {
            throw new Error('No user data'); 
        }
    }

    render() {
   
        return (
            <div>
                <p>About Post:</p> 
                <p>{this.state.post.body}</p>
                <p>About User:</p>
                <ul className="user-info">
                    <li>ID:{this.state.user.id}</li>
                    <li>Name:{this.state.user.name}</li>
                    <li>Username:{this.state.user.username}</li>
                    <li>Email:{this.state.user.email}</li>
                </ul>
            </div>
       )
    }
}