import React from 'react'
import Container from '../components/Layouts/Container'
import BreadCrumb from "../components/Layouts/BreadCrumb"
import Tittle from '../components/Layouts/Tittle'
import Flex from '../components/Layouts/Flex'
import InputField from '../components/Layouts/InputField'

const Contacts = () => {
  return (
    <Container className={"mt-[124px]"}>
      <BreadCrumb
        path={window.location.pathname}
        name={window.location.pathname.split("/")[1]}
        pathName={window.location.pathname.split("/")[1]}
      />
      <div className='mt-[124px]'>
        <Tittle tittle={"Fill up a Form"}/>
      </div>
      <Flex className={"flex-col mt-11"}>
        <label form=''>Name</label>
        <InputField inputType={"text"} placeholder={"Your name here"}/>
      </Flex>
      <Flex className={"flex-col mt-6"}>
        <label form=''>Email</label>
        <InputField inputType={"email"} placeholder={"Your email here"}/>
      </Flex>
      <Flex className={"flex-col mt-6"}>
        <label form='Message'>Message</label>
        <textarea id="Message" name="Your message here" className='w-[780px] h-[132px] border-none outline-none'>Your message here</textarea>
      </Flex>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4344.2093734758055!2d90.37405524391858!3d23.710619508568932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b92bbd364c8f%3A0xe7f6a9d316fe85f8!2sAshrafabad%20High%20School!5e0!3m2!1sen!2sbd!4v1702581210940!5m2!1sen!2sbd" className='w-full h-[572px] mt-[220px]'></iframe>
    </Container>
  )
}

export default Contacts