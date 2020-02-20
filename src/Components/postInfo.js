import React from 'react';
import axios from 'axios';
import './style.css';


import {PostsContext} from '../Context/postContext';


export default class PostInfo extends React.Component {

    static contextType = PostsContext;

    constructor(props) {
        super(props);
        this.state = {
            post: null, 
            user: null,
            isLoaded: false
        }
    }

    
    
    async componentDidMount() {
        let post = null;
        const matchParams = this.props.match.params;
        if(!this.context.activePost){
            post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${matchParams.postId}`)
        }
        try {
            const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${matchParams.userId}`)
            this.setState({
                user: user.data,
                post: this.context.activePost || post.data,
                isLoaded: true
            })

        } catch(error) {
            throw new Error('No user data'); 
        }
    }

    render() {
   
        let { isLoaded } = this.state;
        if(!isLoaded) {
            return<div>Loading..</div>
        } else {
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
}