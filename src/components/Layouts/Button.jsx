import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className,btnLinkAdd,btnName}) => {
  return (
    <Link className={className} to={btnLinkAdd}>{btnName}</Link>
  )
}

export default Button