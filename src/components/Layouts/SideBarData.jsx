import React from 'react'
import SideBarTitle from './SideBarTitle'
import { category,price,colors,brands } from '../../fakeData/fakeData'

const SideBarData = () => {
  return (
    <>
    
    <SideBarTitle title={"Shop by Category"} data={category}/>
    
    <SideBarTitle title={"Shop by Color"} showDrop={true} data={colors}/>
    <SideBarTitle title={"Shop by Brand"} showDrop={true} data={brands}/>
    <SideBarTitle title={"Shop by Price"} data={price}/>
    </>
  )
}

export default SideBarData