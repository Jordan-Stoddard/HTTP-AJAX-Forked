import React, { Component } from 'react';
import axios from 'axios'
import FriendsList from './components/FriendsList'
import NewFriendInputs from './components/NewFriendInputs'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      newFriends: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

componentDidMount() {
  axios
  .get(`http://localhost:5000/friends`)
  .then(response => this.setState({ friends: response.data }))
  .catch(error => console.log(error))
}

addNewFriend = event => {
  event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriends)
    .then(response => this.setState({ friends: response.data}))
}

changeHandler = event => {
this.setState({
  newFriends: {
    ...this.state.newFriends,
    [event.target.name]: event.target.value,
  },
})
}



  render() {
    return (
      <div className="App">
        <NewFriendInputs 
        newFriendData={this.state.newFriends} 
        changeHandler={this.changeHandler} 
        addNewFriend={this.addNewFriend} 
        />
        <FriendsList data={this.state.friends} />
      </div>
    );
  }
}

export default App;
