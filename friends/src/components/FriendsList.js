import React from 'react'
import Friend from './Friend'

const FriendsList = props => {
    return (
        <div className="friendsListDiv" >
            {props.data.map(friend => {
                return (
                 <Friend friend={friend} key={friend.id}/>
                )
            })}
        </div>
    )
}

export default FriendsList