import React from 'react'
import { Link } from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'

const BreadCrumb = ({path,pathName,name}) => {
    return (
        <div className=' font-dm text-xs text-[#767676]'>
            <h2 className='text-[49px] font-bold pb-5 text-[#262626]'>{name}</h2>
            <div className='mt-[11px] flex'>
            <Link to={"/"}>home</Link>
            <FaAngleRight />
            <Link to={path}>{pathName}</Link>
            </div>
        </div>
    )
}

export default BreadCrumb