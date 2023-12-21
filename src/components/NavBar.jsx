import React, { useEffect, useState } from 'react'
import Container from './Layouts/Container'
import Flex from './Layouts/Flex'
import Img from './Layouts/Img'
import Logo from '../assets/Logo.png'
import UnorderLIst from './Layouts/UnorderLIst'
import ListItem from './Layouts/ListItem'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    const rdd = () => {
      if (window.innerWidth < 640) {
        setShowMenu(false);
      }
    }
    window.addEventListener("resize", rdd);
    rdd();
  }, []);
  return (
    <nav className='py-8 px-2'>
      <Container>
        <Flex className={" items-center"}>
          <Img src={Logo} className={"sm:w-[10%]"} />
          <div className='w-[90%]'>
            <FaBars className='sm:hidden ml-auto text-lg' onClick={handleShowMenu} />
            {
              showMenu && (
                <UnorderLIst className={"sm:flex sm:text-lg sm:top-0 top-16 right-0 gap-x-10 font-dm text-sm text-[#767676] justify-center capitalize cursor-pointer absolute sm:relative z-10"}>
                  <ListItem aLinkAdd={"/"} itemName={"home"} aLinkClass={"block sm:inline sm:bg-transparent w-[260px] sm:py-0 sm:px-0 text-center py-4 px-5 hover:text-white sm:hover:text-[#767676] hover:text-[20px] sm:hover:text-sm hover:font-bold sm:hover:font-normal   transition-all duration-300 ease-in bg-[#262626]"} />
                  <ListItem aLinkAdd={"/Shop"} itemName={"Shop"} aLinkClass={"block sm:inline sm:bg-transparent w-[260px] sm:py-0 sm:px-0 text-center py-4 px-5 hover:text-white sm:hover:text-[#767676] hover:text-[20px] sm:hover:text-sm hover:font-bold sm:hover:font-normal  transition-all duration-300 ease-in bg-[#262626]"} />
                  <ListItem aLinkAdd={"/About"} itemName={"About"} aLinkClass={"block sm:inline sm:bg-transparent w-[260px] sm:py-0 sm:px-0 text-center py-4 px-5 hover:text-white sm:hover:text-[#767676] hover:text-[20px] sm:hover:text-sm hover:font-bold sm:hover:font-normal  transition-all duration-300 ease-in bg-[#262626]"} />
                  <ListItem aLinkAdd={"/Contacts"} itemName={"Contacts"} aLinkClass={"block sm:inline sm:bg-transparent w-[260px] sm:py-0 sm:px-0 text-center py-4 px-5 hover:text-white sm:hover:text-[#767676] hover:text-[20px] sm:hover:text-sm hover:font-bold sm:hover:font-normal  transition-all duration-300 ease-in bg-[#262626]"} />
                  <ListItem aLinkAdd={"/Journal"} itemName={"Journal"} aLinkClass={"block sm:inline sm:bg-transparent w-[260px] sm:py-0 sm:px-0 text-center py-4 px-5 hover:text-white sm:hover:text-[#767676] hover:text-[20px] sm:hover:text-sm hover:font-bold sm:hover:font-normal transition-all duration-300 ease-in bg-[#262626]"} />
                </UnorderLIst>
              )
            }
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar