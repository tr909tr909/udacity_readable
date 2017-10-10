import React, { Component } from 'react';
import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import { BrowserRouter, Route } from 'react-router-dom';
import PostDetailView from './views/PostDetailView'
import EditModal from './components/EditModal_container'

class App extends Component {

  render() {
    return (
      <div className="App">

        <EditModal ></EditModal>
        <br></br>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeView}/>
            <Route exact path="/:cat" component={CategoryView}/>
            {/* <Route path="/category/:cat" component={CategoryView}/> */}
            <Route exact path="/:category/:id" component={PostDetailView}/>
            {/* <Route path="/post/:id" component={PostDetailView}/> */}
          </div>
        </BrowserRouter>

      </div>
    );
  }

}

export default App
