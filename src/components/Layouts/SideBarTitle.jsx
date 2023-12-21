import React, { useState } from 'react'
import Flex from './Flex';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import SideBarFData from './SideBarFData';

const SideBarTitle = ({ title, showDrop, data }) => {
  const [showDropDown, setDropDown] = useState(true);
  const handleDropDown = () => {
    setDropDown(!showDropDown)
  }
  return (
    <>
      {
        showDrop ? (

          <div className='font-dm cursor-pointer' onClick={handleDropDown}>
            <Flex className={"items-center justify-between"}>
              <h4 className=' text-[#262626] text-[20px] pt-10'>{title}</h4>
              {
                showDropDown ?
                  <IoMdArrowDropup /> :
                  <IoMdArrowDropdown />

              }
            </Flex>
            {
              showDropDown &&
              data.map((items) =>
                <SideBarFData dataName={items.name} />
              )
            }

          </div>
        ) :
          <div>
            <h4 className=' text-[#262626] text-[20px] pt-10'>{title}</h4>
            {
              data.map((items) =>
                <SideBarFData dataName={items.name} />)
            }
          </div>
      }
    </>
  )
}

export default SideBarTitle