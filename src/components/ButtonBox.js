import React from 'react'

const ButtonBox = ({ children }) => {
    return (
    <div className="buttonBox">{children}</div>
    )
}
ButtonBox.displayName = "ButtonBox";

export default ButtonBox