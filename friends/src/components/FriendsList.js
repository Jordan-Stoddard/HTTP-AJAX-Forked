import React from 'react'
import Friend from './Friend'

const FriendsList = props => {
    return (
        <div className="friendsListDiv" >
            {props.data.map(friend => {
                console.log(friend)
                return (
                 <Friend 
                 friend={friend} 
                 key={friend.id} 
                 deleteFriend={props.deleteFriend} />
                )
            })}
        </div>
    )
}

export default FriendsList