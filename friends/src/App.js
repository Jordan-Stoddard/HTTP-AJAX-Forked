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
      newFriend: {
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
  if (this.state.newFriend.name === '' || this.state.newFriend.age === '' || this.state.newFriend.email === '') {
    return null;
  }
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => this.setState({ 
      friends: response.data,
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }))
}

deleteFriend = (event, id) => {
  event.preventDefault();
  axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response => this.setState({ friends: response.data }))
}

changeHandler = event => {
this.setState({
  newFriend: {
    ...this.state.newFriend,
    [event.target.name]: event.target.value,
  },
})
}



  render() {
    return (
      <div className="App">
        <NewFriendInputs 
        newFriendData={this.state.newFriend} 
        changeHandler={this.changeHandler} 
        addNewFriend={this.addNewFriend} 
        />
        <FriendsList 
        data={this.state.friends}
        deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;
