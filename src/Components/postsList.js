import React from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

export default class PostsList extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            console.log(res)
            this.setState({ posts: res.data });
        });
    }

    renderTableData() {
        return this.state.posts.map((post, index) => {
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
        return (
            <table id='posts'>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              
            </table>
        )
    }
}