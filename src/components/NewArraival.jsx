import React from 'react'
import Slider from "react-slick";
import Container from './Layouts/Container'
import Tittle from './Layouts/Tittle';
import Product from './Layouts/Product';
import productImg1 from '../assets/product1.png';
import productImg2 from '../assets/product2.png';
import productImg3 from '../assets/product3.png';
import productImg4 from '../assets/product4.png';
import productImg5 from '../assets/product5.png';
import productImg6 from '../assets/product6.png';
import productImg7 from '../assets/product7.png';
import productImg8 from '../assets/product8.png';
import productImg9 from '../assets/product9.png';
import productImg10 from '../assets/product10.png';
import productImg11 from '../assets/product11.png';
import productImg12 from '../assets/product12.png';
import adsimg from '../assets/Ads_2.png';
import Flex from './Layouts/Flex';
import Img from './Layouts/Img';

const NewArraival = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: "linear"
    };

    return (
        <section className='mt-[128px]'>
            <Container>
                <Tittle tittle={"New Arrivals"} />
                <div>
                    <Slider {...settings}>
                        <div>
                            <Product className={"w-full"} showBadge={true} productImg={productImg1} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"10%"} />
                        </div>
                        <div>
                            <Product
                             showBadge={true} productImg={productImg4} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"10%"} />
                        </div>
                        <div>
                            <Product showBadge={true} productImg={productImg2} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"10%"} />
                        </div>
                        <div>
                            <Product showBadge={true} productImg={productImg3} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                        </div>
                        <div>
                            <Product showBadge={true} productImg={productImg4} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"10%"} />
                        </div>
                        <div>
                            <Product showBadge={true} productImg={productImg2} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                        </div>
                    </Slider>
                </div>
                <div className='mt-[217px]'>
                    <Flex className={'gap-10'}>
                        <Product productImg={productImg5} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                        <Product productImg={productImg6} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                        <Product productImg={productImg7} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                        <Product productImg={productImg8} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                    </Flex>
                </div>
                <div className='mt-[130px]'>
                    <Img src={adsimg} />
                </div>
                <div className='mt-[128px]'>
                <Tittle tittle={"Special Offers"} />
                <Flex className={'gap-10'}>
                <Product className={"w-[23%]"} productImg={productImg9} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                <Product className={"w-[23%]"} productImg={productImg10} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                <Product className={"w-[23%]"} productImg={productImg11} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                <Product className={"w-[23%]"} productImg={productImg12} showBadge={true} productName={'Basic Crew Neck Tee'} productPrice={"$44.00"} badgeName={"New"} />
                </Flex>
                </div>
            </Container>
        </section>

    )
}

export default NewArraival