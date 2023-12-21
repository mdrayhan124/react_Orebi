import React from 'react'
import Container from './Layouts/Container'
import Flex from './Layouts/Flex'
import UnorderLIst from './Layouts/UnorderLIst'
import ListItem from './Layouts/ListItem'
import { Link } from 'react-router-dom'
import Img from './Layouts/Img'
import FooterLogo from '../assets/footerLogo.png'
import {FaFacebookSquare,FaInstagram,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-[#bdbbbb] p-[60px] font-dm mt-[106px]'>
      <Container>
        <Flex className={"justify-between"}>
          <div className=''>
            <h6 className='text-[16px] font-bold'>MENU</h6>
            <UnorderLIst className={"mt-[17px]"}>
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/home"} itemName={'Home'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Shop"} itemName={'Shop'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/About"} itemName={'About'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Contact"} itemName={'Contact'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Journal"} itemName={'Journal'} />
            </UnorderLIst>
          </div>
          <div className=''>
            <h6 className='text-[16px] font-bold'>SHOP</h6>
            <UnorderLIst className={"mt-[17px]"}>
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/home"} itemName={'Category 1'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Shop"} itemName={'Category 2'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/About"} itemName={'Category 3'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Contact"} itemName={'Category 4'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Journal"} itemName={'Category 5'} />
            </UnorderLIst>
          </div>
          <div className=''>
            <h6 className='text-[16px] font-bold'>HELP</h6>
            <UnorderLIst className={"mt-[17px]"}>
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/home"} itemName={'Privacy Policy'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Shop"} itemName={'Terms & Conditions'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/About"} itemName={'Special E-shop'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Contact"} itemName={'Shipping'} />
              <ListItem className={"text-[#6D6D6D]"} aLinkAdd={"/Journal"} itemName={'Secure Payments'} />
            </UnorderLIst>
          </div>
          <div className='flex flex-col'>
            <Link className='font-bold text-[#262626] text-base' to={"tel:(052) 611-5711"}>(052) 611-5711</Link>
            <Link className='font-bold text-[#262626] text-base' to={"mailto:company@domain.com"}>company@domain.com</Link>
            <Link to={""}><address>575 Crescent Ave. Quakertown, PA 18951</address></Link>
          </div>
          <div>
            <Img src={FooterLogo} />
          </div>

        </Flex>
        <Flex className={' mt-[65px] justify-between'}>
          <div className='flex gap-3 text-[30px]'>
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagram />
          </div>
          <div>
            <p className='font-normal text-sm text-[#6D6D6D]'>{year} Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer