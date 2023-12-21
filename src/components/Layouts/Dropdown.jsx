import React from 'react'

const Dropdown = ({children,className,dRef}) => {
  return (
    <div className={`cursor-pointer ${className}`} ref={dRef}>{children}</div>
  )
}

export default Dropdown