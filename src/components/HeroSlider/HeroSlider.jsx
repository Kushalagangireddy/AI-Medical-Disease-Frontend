 import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "./HeroSlider.css";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      speed={1200}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      allowTouchMove={false}
      className="hero-slider"
    >
      {[hero1, hero2, hero3, hero4].map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Medical ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;