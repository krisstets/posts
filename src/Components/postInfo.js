import React from 'react';
import axios from 'axios';


export default class PostInfo extends React.Component {
    state = {
        user: [],
        post: []
    }

    matchParams = this.props.match.params
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            this.setState({ post: res.data.filter(post => post.id === parseInt(this.matchParams.postId))[0] });
        });
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ user: res.data.filter(user => user.id === parseInt(this.matchParams.userId))[0] });
        });
    }

    render() {
        return (
            <div>
                <p>About Post:</p> 
                <p>{this.state.post.body}</p>
                <ul>
                    <li>About User:</li>
                    <li>ID:{this.state.user.id}</li>
                    <li>Name:{this.state.user.name}</li>
                    <li>Username:{this.state.user.username}</li>
                    <li>Email:{this.state.user.email}</li>
                </ul>

            </div>
            
        )
    }
}