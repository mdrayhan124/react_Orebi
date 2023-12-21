import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({className,aLinkAdd,itemName,aLinkClass}) => {
  return (
    <li className={className}><Link to={aLinkAdd} className={aLinkClass}>{itemName}</Link></li>
  )
}

export default ListItem