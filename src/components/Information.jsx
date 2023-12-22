import React from 'react'
import Container from './Layouts/Container';
import Flex from './Layouts/Flex';
import {RiNumber2} from 'react-icons/ri'
import { FaTruck } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';


const Information = () => {
    return (
        <Container className={"font-dm py-8 bg-[#eb8334]"}>
            <Flex className={"justify-between"}>
                <div className='flex items-center gap-[15px]'>
                <RiNumber2 className='text-[20px] ' />
                <p className='hidden sm:block'>Two years warranty</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <FaTruck className='text-[20px]' />
                    <p className='hidden sm:block'>Free shipping</p>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <FaArrowRotateLeft className='text-[20px]' />
                    <p className='hidden sm:block'>Return policy in 30 days</p>
                </div>
            </Flex>
        </Container>
    )
}

export default Information