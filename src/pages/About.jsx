import React from 'react'
import BreadCrumb from '../components/Layouts/BreadCrumb'
import Container from '../components/Layouts/Container'
import Flex from '../components/Layouts/Flex'
import Img from '../components/Layouts/Img'
import aboutPageImg from '../assets/aboutPageImg.png'
import aboutPageImg2 from '../assets/aboutPageImg2.png'
import Button from '../components/Layouts/Button'

const About = () => {
  return (
    <Container className={"mt-10"}>
      <section className='font-dm'>
      <BreadCrumb
          path={window.location.pathname}
          name={window.location.pathname.split("/")[1]}
          pathName={window.location.pathname.split("/")[1]}
        />
        <Flex className={"items-center mt[126px]"}>
          <div className=' relative w-[827px]'>
          <Img src={aboutPageImg2} />
          <Button btnName={"Our Brands"} className={"bg-[#262626] py-7 px-24 text-white absolute bottom-[62px] left-[252px] text-base font-bold"}/>
          </div>
          <div className='relative w-[827px]'>
          <Img src={aboutPageImg}/>
          <Button btnName={"Our Brands"} className={"bg-[#262626] py-7 px-24 text-white absolute bottom-[62px] left-[252px] text-base font-bold"}/>
          </div>
        </Flex>
        <div className='mt-[118px]'>
            <p className='text-[#262626] text-[39px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
          </div>
          <Flex className={"mt-[118px] mb-[131px]"}>
            <div className='w-[507px]'>
              <h4 className='font-bold mb-[11px]'>Our Vision</h4>
              <p className='text-[#767676] text-base leading-8	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-[507px]'>
              <h4 className='font-bold mb-[11px]'>Our Story</h4>
              <p className='text-[#767676] text-base leading-8	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-[507px]'>
              <h4 className='font-bold mb-[11px]'>Our Brands</h4>
              <p className='text-[#767676] text-base leading-8	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Flex>
    </section>
    </Container>
  )
}

export default About