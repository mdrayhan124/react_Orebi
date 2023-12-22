import React from 'react'
import Img from './Img'
import Flex from './Flex';
import { FaHeart,FaShoppingCart  } from 'react-icons/fa'
import { RiLoopLeftFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Product = ({ className,showBadge,productImg,productName,productPrice ,badgeName,link}) => {
  return (
    <Link to={link} className={`${className} font-dm relative overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105`}>
      <Img src={productImg} className="w-[370px] h-[360px]" alt={productName} />
      <Flex className="justify-between mt-5">
        <h6 className="text-[#262626] font-bold text-xl">{productName}</h6>
        <h6 className="text-[#767676] font-normal text-base">{productPrice}</h6>
      </Flex>
      {showBadge && (
        <h5 className="absolute bg-black py-2 px-4 top-7 left-7 text-white">{badgeName}</h5>
      )}
      <div className="absolute bottom-[55px] bg-red-400 p-4 transition-all scale-0 group-hover:scale-100">
        <Flex className="items-center justify-end gap-4">
          <p>Add to Wish List</p>
          <FaHeart />
        </Flex>
        <Flex className="items-center justify-end gap-4 mt-3">
          <p>Compare</p>
          <RiLoopLeftFill />
        </Flex>
        <Flex className="items-center justify-end gap-4 mt-3">
          <p>Add to Cart</p>
          <FaShoppingCart />
        </Flex>
      </div>
    </Link>
  )
}

export default Product