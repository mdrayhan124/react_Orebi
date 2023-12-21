import React, { useState } from 'react'
import Container from '../components/Layouts/Container'
import BreadCrumb from '../components/Layouts/BreadCrumb'
import Flex from '../components/Layouts/Flex'
import { ImCross } from 'react-icons/im'
import Img from '../components/Layouts/Img'
import ChartImg from '../assets/chartImg.png'
import InputField from '../components/Layouts/InputField'
import Button from '../components/Layouts/Button'

const Chart = () => {
  const [showCuponBox, setCuponBox] = useState(false)
  const handleShowBox = () => { setCuponBox(!showCuponBox) }

  return (
    <Container className={"font-dm mt-10"}>
      <BreadCrumb
        path={window.location.pathname}
        name={window.location.pathname.split("/")[1]}
        pathName={window.location.pathname.split("/")[1]}
      />
      <Flex className={'gap-[340px] px-5 py-8 bg-[#eb8334] text-[#262626] mt-[136px]'}>
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
      </Flex>
      <Flex className={" gap-[200px] items-center"}>
        <div className='flex item-center items-center'>
          <ImCross />
          <Img src={ChartImg} />
          <p>Product name</p>
        </div>
        <p>$44.00</p>
        <Flex className={'items-center pl-[150px]'}>
          <button className='inline'>-</button>
          <p className='inline-block'>1</p>
          <button>+</button>
        </Flex>
        <p className='pl-[150px]'>$44.00</p>
      </Flex>
      <Flex className={" items-center bg-[#eb8334]"}>
        <select name="" id="" className='outline-none w-[255px] bg-[#eb8334]'>
          <option value={"m"}>M</option>
          <option value={"xl"}>XL</option>
          <option value={"xxl"}>XXL</option>
        </select>
        <div className='relative'>
          <p className='ml-5  cursor-pointer' onClick={handleShowBox}>Apply coupon</p>
          {
            showCuponBox && (
              <div className='absolute border-2 border-black text-center p-3 bg-[#F5F7F7] w-[300px] mt-3'>
                <label>your cupon Number</label>
                <InputField className={"text-center w-[230px]"} inputType={"text"} placeholder={"your cupon Number"} />
                <Button btnName={"Submit"} className={"bg-black text-white"} />
              </div>
            )
          }
        </div>
        <Button btnName={"Update cart"} className={"ml-[800px] text-base font-bold text-[#262626]"} />
      </Flex>
      <div className='flex flex-col text-end items-end w-full pt-14'>
        <h4 className='font-bold text-[20px] text-[#262626]'>Cart totals</h4>
        <Flex className={"gap-[254px] mr-[100px] pt-9 text-base"}>
          <p>Subtotal</p>
          <p className='text-[#767676]'>389.99 $</p>
        </Flex>
        <Flex className={"gap-[254px]  mr-[100px] pt-4 text-base"}>
          <p>Total</p>
          <p className='text-[#767676]'>389.99 $</p>
        </Flex>
        <Button className={"px-8 py-6 bg-[#262626] text-white mt-[46px]"} btnName={"Proceed to Checkout"}/>

      </div>

    </Container>
  )
}

export default Chart