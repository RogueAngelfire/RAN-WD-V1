import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({variant, children}) {
    return (
        <Alert className="mt-3 mb-5" variant={variant}>
            {children}
        </Alert>
    )
}

export default Message
