import "./About.css";
import image from "../assets/image.png";
import { Uppost } from "./Context";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../assets/1701428273349.png'
import image2 from '../assets/images5.jpg'
import image3 from '../assets/Cover.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function About() {
  const { welcome } = Uppost();

  return (
    <>
     <div className="Heading2">
          <p className="s1">
            Welcome to <span className="highlight">Embedded Classroom</span> –
            Your Gateway to{" "}
            <span className="tripathi">Embedded  Mastery!</span>
          </p>
        </div>
    
    <div className="Swapslide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} className="image" /></SwiperSlide>
        <SwiperSlide><img src={image2} className="image"/></SwiperSlide>
        <SwiperSlide><img src={image3} className="image"/></SwiperSlide>
      
      </Swiper>
      <div className="maina" ref={welcome}>
       
        <div className="aboutme">
          <div className="innerabout">
            <p className="perap">
              At <span className="highlight">Embedded Classroom</span>, we are
              passionate about transforming
              <span className="highlight">
                {" "}
                theoretical knowledge{" "}
              </span> into{" "}
              <span className="highlight"> real-world expertise</span>. With a{" "}
              <span className="highlight">decade of experience</span> in
              embedded systems, our mission is to equip
              <span className="highlight"> students</span>,{" "}
              <span className="highlight">professionals</span>, and{" "}
              <span className="highlight">enthusiasts</span> with{" "}
              <span className="highlight"> hands-on training</span> that bridges
              the gap between
              <span className="highlight"> learning</span> and{" "}
              <span className="highlight"> implementation</span>.
            </p>
          </div>
        
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
