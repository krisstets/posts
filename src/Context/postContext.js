import React, {createContext, Component} from 'react';
import axios from 'axios';

export const PostsContext = createContext();

class PostsContextProvider extends Component {

    constructor(props){
        super(props);

        this.updatePost = post => {this.setState({activePost: post})}
        this.updatePosts = posts => {this.setState({posts})}

        this.state = {
            posts: [],
            activePost: null,
            updatePost: this.updatePost,
            updatePosts: this.updatePosts
         }
    }

    async componentDidMount() {
        let posts = null;
        if(!this.state.posts.length && this.props.location.pathname === '/posts'){
            posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            this.setState({ posts: posts.data})
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