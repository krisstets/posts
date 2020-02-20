import React, {createContext, Component} from 'react';
import axios from 'axios';

export const PostsContext = createContext();

class PostsContextProvider extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        try{
            axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
                this.setState({ posts: res.data})
            }) 

        } catch(error) {
            throw new Error('No post data'); 
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