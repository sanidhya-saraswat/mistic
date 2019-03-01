import React, { Component } from 'react';
import './AddNew.css';
import Recents from './Recents/Recents';
import AddNewMist from './AddNewMist/AddNewMist';
class AddNew extends Component {
  render() {
    return (
   <div className="base-add-new-div">
<Recents/>
<AddNewMist/>
   </div>
    );
  }
}

export default AddNew;
