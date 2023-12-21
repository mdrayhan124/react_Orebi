import React from 'react'
import Container from '../components/Layouts/Container'
import BreadCrumb from '../components/Layouts/BreadCrumb'
import Tittle from '../components/Layouts/Tittle'
import InputField from '../components/Layouts/InputField'
import Flex from '../components/Layouts/Flex'
import Button from '../components/Layouts/Button'


const LogInPage = () => {
  return (
    <Container className={"font-dm mt-[124px] mb-[140px]"}>
      <BreadCrumb
        path={window.location.pathname}
        name={window.location.pathname.split("/")[1]}
        pathName={window.location.pathname.split("/")[1]}
      />
      <p className='text-[#767676] text-base w-[644px] leading-[30px] mt-[127px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <div className='mt-[100px]'>
        <Tittle tittle={"Returning Customer"} />
        <Flex className={"mt-11"}>
          <div className='flex flex-col'>
            <label form='' className='bm-[14px]'>Email address</label>
            <InputField className={"w-[580px]"} inputType={"text"} placeholder={"company@domain.com"} />
          </div>
          <div className='flex flex-col'>
            <label form=''>Password</label>
            <InputField className={"w-[580px]"} inputType={"password"} placeholder={"******"} />
          </div>
        </Flex>
        <Button className={"inline-block border border-[#2B2B2B] capitalize px-20 py-4 mt-8"} btnName={"Log in"}/>
      </div>
      <div className='mt-[124px]'>
        <Tittle tittle={"New Customer"}/>
        <p className='w-[644px] font-normal text-base text-[#767676] mt-10 leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>
      <Button className={"bg-[#2B2B2B] inline-block capitalize px-20 py-4 mt-[50px] text-white"} btnName={"Continue"}/>
    </Container>
  )
}

export default LogInPage