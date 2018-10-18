import React from "react";

const Friend = props => {
    console.log(props)
    const {name, id, age, email, deleteFriend} = props.friend
  return (
    <div className="friendCard">
      <div className="flexyDiv"> 
      <h1>Friend's Contact Info</h1>
      <button className="button" onClick={event => props.deleteFriend(event, id)}>
        X
      </button>
      </div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>E-mail: {email}</li>
      </ul>


    </div>
  );
};

export default Friend;
