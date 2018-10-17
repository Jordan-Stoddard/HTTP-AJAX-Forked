import React from 'react'

const FriendsList = props => {
    return (
        <div className="friendsListDiv" >
            {props.data.map(friends => {
                return (
                    <div className="friendCard" key={friends.id}>
                    <h1>Friend's Contact Info</h1>
                    <ul >
                    <li>Name: {friends.name}</li>
                    <li>Age: {friends.age}</li>
                    <li>E-mail: {friends.email}</li>
                    </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList