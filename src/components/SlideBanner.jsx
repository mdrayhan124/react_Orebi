import React from 'react'
import Slider from "react-slick";
import Img from './Layouts/Img';
import SlideBannerImg from '../assets/SlideBanner.png';

const SlideBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <section>
            <Slider {...settings}>
                <div>
                    <Img src={SlideBannerImg} />
                </div>
                <div>
                    <Img src={SlideBannerImg} />
                </div>
                <div>
                    <Img src={SlideBannerImg} />
                </div>
            </Slider>
        </section>
    )
}

export default SlideBanner