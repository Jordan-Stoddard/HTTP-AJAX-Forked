import React, { Component } from 'react';
import axios from 'axios'
import FriendsList from './components/FriendsList'
import NewFriendInputs from './components/NewFriendInputs'

import './App.css';

const existingFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      },
      editingId: null,
      isEditing: false,
    }
  }

// Mount initial Data //

componentDidMount() {
  axios
  .get(`http://localhost:5000/friends`)
  .then(response => this.setState({ friends: response.data }))
  .catch(error => console.log(error))
}

// Function that adds a new object into our server array. //

addNewFriend = () => {
  
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

// Function that deletes a friend based on it's ID from our server array. //

deleteFriend = (event, id) => {
  event.preventDefault();
  axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response => this.setState({ friends: response.data }))
}

// onChange function that speads in our existing newFriend object and then updates the fields in the object based on the location and name. //

changeHandler = event => {
this.setState({
  newFriend: {
    ...this.state.newFriend,
    [event.target.name]: event.target.value,
  },
})
}

// Function that changes an existing friend's information.

updateFriend = () => {
  axios
  .put(`http://localhost:5000/friends/${this.state.editingId}`, this.state.newFriend)
  .then(response => {
    this.setState({
      friends: response.data,
      editingId: null,
      isEditing: false,
      newFriend: existingFriend,
    })
  })
}


toggleFriendInfoForm = (ev, friend) => {
  ev.preventDefault();
  this.setState({
    newFriend: friend,
    isEditing: true,
    editingId: friend.id
  })
}

  render() {
    return (
      <div className="App">
        <NewFriendInputs 
        newFriendData={this.state.newFriend} 
        changeHandler={this.changeHandler} 
        addNewFriend={this.addNewFriend}
        editingId={this.state.editingId}
        isEditing={this.state.isEditing}
        updateFriend={this.updateFriend}
        />
        <FriendsList 
        data={this.state.friends}
        deleteFriend={this.deleteFriend}
        toggleFriendInfoForm={this.toggleFriendInfoForm}
        />
      </div>
    );
  }
}

export default App;
