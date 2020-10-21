import React from 'react'

function Message({message, pseudo}) {
    return (
        <p className="user-message">
         {pseudo}: {message}
        </p>
    )
}

export default Message
