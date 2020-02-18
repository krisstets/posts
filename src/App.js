import React from 'react';
import './App.css';

import PostsList from './Components/postsList';
import PostInfo from './Components/postInfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App()  {
    return (
      <div className='App'> <Router>
      
        <Switch>
         
            <Route path='/posts' component={PostsList}/>
            <Route path='/post-info/:postId/:userId' component={PostInfo}/>
          
        </Switch>
      </Router>    </div>
    );
}



export default App;