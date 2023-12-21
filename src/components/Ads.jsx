import React from 'react'
import Container from './Layouts/Container';
import Flex from './Layouts/Flex';
import Img from './Layouts/Img';
import Ad1 from '../assets/Ad1.png';
import Ad2 from '../assets/Ad2.png';
import Ad3 from '../assets/Ad3.png';


const Ads = () => {
  return (
    <section>
        <Container className={"mt-[147px]"}>
            <Flex>
                <Img src={Ad1} className={"w-[780px]"}/>
                <div>
                    <Img src={Ad2}/>
                    <Img src={Ad3} className={"mt-10"}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ads