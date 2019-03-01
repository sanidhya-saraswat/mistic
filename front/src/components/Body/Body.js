import React, { Component } from 'react';
import './Body.css';
import { Route } from 'react-router-dom';
import AddNew from './AddNew/AddNew';
  import Manage from './Manage/Manage';
  import Switch from 'react-router-dom/Switch';
  class Body extends Component {
    render() {
      return (
        <div>
        <Switch>
          <Route exact path="/" component={AddNew} />
          <Route path="/manage" component={Manage} />
        </Switch>
      </div>
    );
  }
}

export default Body;
