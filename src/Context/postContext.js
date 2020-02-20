import React, {createContext, Component} from 'react';
import axios from 'axios';

export const PostsContext = createContext();

class PostsContextProvider extends Component {

    constructor(props){
        super(props);

        this.updatePost = id => {this.setState({activePost: this.state.posts.find(el => el.id === id)})}

        this.state = {
            posts: [],
            activePost: null,
            updatePost: this.updatePost
         }
    }

    

    componentDidMount() {

        if(!this.state.posts.length && this.props.location.pathname === '/posts'){
            try{
            axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
                this.setState({ posts: res.data})
            }) 

        } catch(error) {
            throw new Error('No post data'); 
        }
        }
        
    }


    render() {
        return(
            <PostsContext.Provider value={this.state}>
                {this.props.children}
            </PostsContext.Provider>
        )
    }
}

export default PostsContextProvider;