import React from 'react'

const AuthLayout = (props) => {
    console.log(props);
    const {children} = props    
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default AuthLayout
