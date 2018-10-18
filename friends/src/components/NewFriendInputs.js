import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const NewFriendInputs = props => {
  const handleClick = ev => {
    ev.preventDefault();
    if (props.isEditing) {
      props.updateFriend();
    } else {
      props.addNewFriend();
    }
  }

  return (
    <Fragment>
      <div className="inputDiv">
        <h1>{props.isEditing ? 'Edit Info:' : 'Add a New Friend:'}</h1>
        <form className="inputForm">
          <input
            type="text"
            required
            placeholder="Type your friend's name here..."
            name="name"
            value={props.newFriendData.name}
            onChange={props.changeHandler}
          />

          <input
            type="number"
            required
            placeholder="Type your friend's age here..."
            name="age"
            value={props.newFriendData.age}
            onChange={props.changeHandler}
          />

          <input
            type="text"
            required
            placeholder="Type your friend's e-mail here..."
            name="email"
            value={props.newFriendData.email}
            onChange={props.changeHandler}
          />
          <div className="flexyDiv2">
          <button className="otherButton1" onClick={handleClick}>{props.isEditing ? 'Edit Info' : 'Add Friend'}</button>
          
          </div>
        </form>
      </div>
    </Fragment>
  );
};

NewFriendInputs.propTypes = {
  newFriendsData: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string
  }),
  changeHandler: PropTypes.func,
  addNewFriend: PropTypes.func,
};

export default NewFriendInputs;
