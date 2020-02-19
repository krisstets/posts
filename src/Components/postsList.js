import React from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';




export default class PostsList extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        try{
           this.setState({isLoaded: true}, () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            this.setState({ posts: res.data, isLoaded: false });
            }); 
        }) 
        } catch(error) {
            throw new Error('No data'); 
        }
        

    }

    renderTableData() {
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
        if(isLoaded) {
            return<div>Loading..</div>
        } else {
            return (
            <table id='posts'>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              
            </table>
        )}
        
    }
}
