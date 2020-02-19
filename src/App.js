import React from 'react';
import './App.css';
import PostsList from './Components/postsList';
import PostInfo from './Components/postInfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import PostsContextProvider from './Context/postContext';


function App()  {
    return (
      
      <Router>
         <div className='App'> 
         <Nav/>
        <Switch>
          <PostsContextProvider>
            <Route path='/posts' component={PostsList}/>
            <Route path='/post-info/:postId/:userId' component={PostInfo}/>
          </PostsContextProvider>

            
        </Switch>
         </div>
      </Router>   
  
    );
}



export default App;