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
  const [showCuponBox, setCuponBox] = useState(true)
  const handleShowBox =()=>{ setCuponBox(!showCuponBox)}

  return (
    <Container className={"font-dm"}>
      <BreadCrumb
        path={window.location.pathname}
        name={window.location.pathname.split("/")[1]}
        pathName={window.location.pathname.split("/")[1]}
      />
      <Flex className={'gap-[340px] px-5 py-8 bg-[#F5F5F3] text-[#262626]'}>
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
      <Flex className={" items-center"}>
        <select name="" id="" className='outline-none w-[255px]'>
          <option value={"m"}>M</option>
          <option value={"xl"}>XL</option>
          <option value={"xxl"}>XXL</option>
        </select>
       <div className='relative'>
       <p onClick={handleShowBox}>Apply coupon</p>
            {
              showCuponBox&&(
                 <div className='absolute border-2 border-black text-center p-3 bg-[#F5F7F7]'>
                  <label>your cupon Number</label>
                  <InputField className={"text-center w-[230px]"} inputType={"text"} placeholder={"your cupon Number"}/>
                  <Button btnName={"Submit"} className={"bg-black text-white"}/>
                 </div>
              )
            }
       </div>
      </Flex>
    </Container>
  )
}

export default Chart