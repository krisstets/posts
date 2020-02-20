import React from 'react';
//import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';
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

     componentDidUpdate() {
         if((this.state.posts.length === 0)) {
             this.setState({
                 posts: this.context.posts,
                 isLoaded: true 
            })
        }
       console.log(this.context);
       console.log(this.state.posts)
     }

    renderTableData() {
           console.log(this.state.posts)    
           return this.state.posts.map(post => { 
           const { id, userId, title } = post 
           return (
                 <tr key={id}>
                  <Link to={`/post-info/${id}/${userId}`}><td>{id}</td></Link>
                 <td>{userId}</td>
                 <td>{title}</td>
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
            <table id="posts" className='posts'>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              
            </table>
        )}
    }
}

