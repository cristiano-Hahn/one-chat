import React from 'react'

export default function MyMessage({ title, message }) {
    return (
        <div className='my-message'>
            <div className='author'>
                {title}
            </div>
            <div className='message'>
                {message}
            </div>
        </div>
    )
}