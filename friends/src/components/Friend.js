import React from "react";

const Friend = props => {
    const {name, id, age, email} = props.friend
  return (
    <div className="friendCard">
      <h1>Friend's Contact Info</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>E-mail: {email}</li>
      </ul>

      <button onClick={event => props.deleteFriend(event, props.id)}>
        Delete this friend, you hate them
      </button>
    </div>
  );
};

export default Friend;
