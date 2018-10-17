import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const NewFriendInputs = props => {
  return (
    <Fragment>
      <div className="inputDiv">
        <h1>Add a New Friend:</h1>
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
          <button onClick={props.addNewFriend}>Submit</button>
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
