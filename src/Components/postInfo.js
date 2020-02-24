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
        let post = this.context.activePost;
        const matchParams = this.props.match.params;

        if(!this.state.post && post) {
            this.setState({
                post,
                isLoaded: true 
           })
           console.log('HERE')
       } else{
            const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${matchParams.postId}`)
            post = postData.data
       }
       try {
            const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${matchParams.userId}`)
            this.setState({
                user: user.data,
                post: post,
                isLoaded: true
            })
             
        } catch(error) {
            throw new Error(error); 
        }
    }

    render() {
        let { isLoaded } = this.state;
        if(!isLoaded) {
            return<div>Loading..</div>
        } else {
            return (
                <div>
                    <div className="card">
                        <h2>About Post:</h2> 
                        <p className='post-info'>{this.state.post.body}</p>
                    </div>
                    <div className="card">
                        <h2>About User</h2>
                        <ul className="user-info">
                            <li><p>ID</p>{this.state.user.id}</li>
                            <li><p>Name</p>{this.state.user.name}</li>
                            <li><p>Username</p>{this.state.user.username}</li>
                            <li><p>Email</p>{this.state.user.email}</li>
                        </ul>
                    </div>
                 
                </div>
             )
        }
        
    }
}