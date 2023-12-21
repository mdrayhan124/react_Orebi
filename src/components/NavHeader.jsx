import React, { useRef, useState, useEffect } from 'react'
import Container from './Layouts/Container';
import Flex from './Layouts/Flex';
import Dropdown from './Layouts/Dropdown';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { FcSearch } from 'react-icons/fc';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { ImCross } from 'react-icons/im';
import ListItem from "./Layouts/ListItem";
import UnorderLIst from './Layouts/UnorderLIst';
import Img from './Layouts/Img';
import cartImg from "../assets/cartImg.png";
import Button from './Layouts/Button';

const NavHeader = () => {
    const [showCatagory, setSowCatagory] = useState(false);
    const [showUser, setSowUser] = useState(false);
    const [showcart, setSowcart] = useState(false);

    const catagory = useRef();
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (catagory.current.contains(e.target)) {
                setSowCatagory(!showCatagory)
            } else {
                setSowCatagory(false)
            }
        });
    }, [showCatagory]);
    const user = useRef();
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (user.current.contains(e.target)) {
                setSowUser(!showUser)
            } else {
                setSowUser(false)
            }
        });
    }, [showUser]);
    const cart = useRef();
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (cart.current.contains(e.target)) {
                setSowcart(!showcart)
            } else {
                setSowcart(false)
            }
        });
    }, [showcart]);
    return (
        <section className='bg-[#F5F5F3] p-[25px] '>
            <Container>
                <Flex className={'justify-between items-center'}>
                    <Dropdown className={"flex gap-3 items-center lg:w-[10%] relative"} dRef={catagory}>
                        <HiMiniBars3BottomLeft />
                        <p className='hidden sm:block text-[#262626] text-md'>Shop by Category</p>
                        {
                            showCatagory && (
                                <UnorderLIst className={"absolute w-[263px] bg-[#262626] text-[#b4b4b4] top-10 left-0 text-md z-10"}>
                                    <ListItem aLinkClass={"w-[263px] inline-block"} itemName={"Accesories"} className={"py-4 px-5 hover:text-white hover:ml-9 hover:font-bold  transition-all duration-300 ease-in"} />
                                    <ListItem aLinkClass={"w-[263px] inline-block"} itemName={"Furniture"} className={"py-4 px-5 hover:text-white hover:ml-9 hover:font-bold	 transition-all duration-300 ease-in"} />
                                    <ListItem aLinkClass={"w-[263px] inline-block"} itemName={"Clothes"} className={"py-4 px-5 hover:text-white hover:ml-9 hover:font-bold  transition-all duration-300 ease-in"} />
                                    <ListItem aLinkClass={"w-[263px] inline-block"} itemName={"Bags"} className={"py-4 px-5 hover:text-white hover:ml-9 hover:font-bold	 transition-all duration-300 ease-in"} />
                                    <ListItem aLinkClass={"w-[263px] inline-block"} itemName={"Home appliances"} className={"py-4 px-5 hover:text-white hover:ml-9 hover:font-bold	 transition-all duration-300 ease-in"} />
                                </UnorderLIst>
                            )
                        }
                    </Dropdown>
                    <div className='lg:w-[40%]'>
                        <input type="text" placeholder='Search Products' className='py-4 px-5 sm:w-[350px] md:w-[400px] outline-transparent' />
                        <FcSearch className='inline-block sm:ml-[-40px] lg:ml-[50px] cursor-pointer' />
                    </div>
                    <Flex className={'lg:gap-x-10 lg:w-[7%] text-xl'}>
                        <Dropdown className={'flex md:gap-x-1 item-center relative'} dRef={user}>
                            <FaUser />
                            <IoMdArrowDropdown />
                            {
                                showUser && (
                                    <UnorderLIst className={"w-[200px] bg-white text-[#262626] absolute top-10 left-[-165px] text-md z-10"}>
                                        <ListItem aLinkAdd={"/SignUp"} aLinkClass={"w-[200px] inline-block"} itemName={"My Account"} className={"py-4 px-14 hover:bg-black hover:text-white border-black transition-all duration-300 ease-in"} />
                                        <ListItem aLinkAdd={"/LogInPage"} aLinkClass={"w-[200px] inline-block"} itemName={"Log in"} className={"py-4 px-14 hover:bg-black hover:text-white border-black  transition-all duration-300 ease-in"} />
                                    </UnorderLIst>
                                )
                            }
                        </Dropdown>
                        <Dropdown className={"relative"} dRef={cart}>
                            <FaShoppingCart />
                            {
                                showcart && (
                                    <div className='absolute top-10 right-0 font-dm z-10'>
                                <Flex className={"w-[360px] px-5 py-5 bg-[#F5F5F3] items-center text-md text-bold text-[#262626] justify-between"}>
                                    <div className=''>
                                        <Img src={cartImg} className={"w-20 h-20"} />
                                    </div>
                                    <div>
                                        <p>Black mdart Watch</p>
                                        <p>$44.00</p>
                                    </div>
                                    <ImCross />
                                </Flex>
                                <div className='py-4 px-5 bg-white'>
                                    <h5 className='text-[#767676] text-md'>Subtotal <span className='text-[16px] font-bold text-[#262626]'> $44.00</span> </h5>
                                    <div className='flex justify-between'>
                                        <Button btnLinkAdd={"/Chart"} btnName={"View Cart"} className={"py-4 px-10 border font-bold text-md hover:bg-black hover:text-white transition-all duration-300 ease-in border-black mt-3 inline-block"} />
                                        <Button btnLinkAdd={"/"} btnName={"Checkout"} className={"py-4 px-10 border font-bold text-md hover:bg-black hover:text-white transition-all duration-300 ease-in border-black mt-3 inline-block"} />
                                    </div>
                                </div>
                            </div>
                                )
                            }
                        </Dropdown>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}

export default NavHeader