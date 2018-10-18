import React from "react";

const Friend = props => {
  const { name, id, age, email } = props.friend;
  return (
    <div className="friendCard">
      <div className="flexyDiv">
        <h1>{`${name}'s Contact Info`}</h1>
        <button
          className="deleteButton"
          onClick={event => props.deleteFriend(event, id)}
        >
          <p>X</p>
        </button>
      </div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>E-mail: {email}</li>
      </ul>

      <div className="flexyDiv2">
        <button 
        className="otherButton2" 
        onClick={ev => {props.toggleFriendInfoForm(ev, props.friend)}}
        >
          Edit Info
        </button>
      </div>
    </div>
  );
};

export default Friend;
