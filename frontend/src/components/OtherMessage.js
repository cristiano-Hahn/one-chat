import React from 'react'

export default function OtherMessage({title, message}) {
    return (
        <div className='other-message'>
            <div className='author'>
                {title}
            </div>
            <div className='message'>
                {message}
            </div>
        </div>
    )
}