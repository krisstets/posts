import React, {createContext, Component} from 'react';


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



    render() {
        return(
            <PostsContext.Provider value={this.state}>
                {this.props.children}
            </PostsContext.Provider>
        )
    }
}


export default PostsContextProvider;