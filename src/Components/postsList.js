import React from 'react';
import './style.css';
import {PostsContext} from '../Context/postContext';

export default class PostsList extends React.Component {

    static contextType = PostsContext;

    constructor(props) {
        super(props);
        this.state = {
            posts: [], 
            isLoaded: false
        }
    }

    componentDidMount() {
        if(this.state.posts.length === 0 && this.context.posts.length) {
            this.setState({
                posts: this.context.posts,
                isLoaded: true 
           })
       }
    }

  
     componentDidUpdate() {
         if(this.state.posts.length === 0 && this.context.posts.length) {
             this.setState({
                 posts: this.context.posts,
                 isLoaded: true 
            })
        }
     }

    renderTableData() {
       return this.state.posts.map(post => { 
       const { id, userId, title } = post 
       return (
            <tr key={id} onClick = {e => {this.context.updatePost(id); this.props.history.push(`/post-info/${id}/${userId}`) }}>
            <td>{id}</td>
            <td>{userId}</td>
            <td className='post-title'>{title}</td>
            </tr> 
           )
        })
    }

    render() {
        let { isLoaded } = this.state;
        if(!isLoaded) {
            return<div>Loading..</div>
        } else {
            return (
            <table className='posts'>
                  <thead>
                    <tr>
                    <th>PostID</th>
                    <th>UserID</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              
            </table>
        )}
    }
}