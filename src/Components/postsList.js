import './style.css';
import React from 'react';
import { PostsContext } from '../Context/postContext';
import axios from 'axios';

export default class PostsList extends React.Component {
    static contextType = PostsContext;
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false
        };
    }

   async componentDidMount() {
        if (this.state.posts.length === 0 && this.context.posts.length) {
            this.setState({
                posts: this.context.posts,
                isLoaded: true
            });

        } else if(!this.context.posts.length){ 
            let posts = null;
            posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            this.setState({ posts: posts.data, isLoaded: true})
            
        }
        

    }

    componentDidUpdate() {
        if (this.state.posts.length === 0 && this.context.posts.length) {
            this.setState({
                posts: this.context.posts,
                isLoaded: true
            });
        }
    }



    render() {
        let { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading..</div>;
        }
        else {
            return (<table className='posts'>
                <thead>
                    <tr>
                        <th>PostID</th>
                        <th>UserID</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map(post => {
                        const { id, userId, title, activePost} = post;
                        return (<tr key={id} onClick={e => { this.context.updatePost(activePost); this.props.history.push(`/post-info/${id}/${userId}`); }}>
                            <td>{id}</td>
                            <td>{userId}</td>
                            <td className='post-title'>{title}</td>
                        </tr>);
                    })}
                </tbody>

            </table>);
        }
    }
}
