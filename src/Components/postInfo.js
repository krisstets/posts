import React from 'react';
import axios from 'axios';

export default class PostInfo extends React.Component {
    state = {
        users: [],
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            console.log(this.props.match.params.postId);
            this.setState({ posts: res.data.filter(post => post.id === parseInt(this.props.match.params.postId)) });
            console.log(this.state.posts)
        });
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(this.props.match.params.userId)
            this.setState({ users: res.data.filter(user => user.id === parseInt(this.props.match.params.userId)) });
             console.log(this.state.users)
        });
    }

    render() {
        return (
            <h1>  {this.state.users.map(user => user.name)}</h1>
        )
    }
}