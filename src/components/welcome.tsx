import React from "react"

import Carousel from "react-bootstrap/Carousel";

import ShopNowButton from "../components/elements/shop-now-btn";

import WelcomeImage1 from "../../public/assets/welcome/welcome-img-1.svg";
import WelcomeImage2 from "../../public/assets/welcome/welcome-img-2.svg";
import WelcomeImage3 from "../../public/assets/welcome/welcome-img-3.svg";


// removed for now due to size issue
<Carousel.Item>
  <div className="relative font-sans text-white">
    <WelcomeImage1 className="w-full" />
    <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <ShopNowButton />
    </div>
  </div>
</Carousel.Item>


const Welcome = () => {
  return <>
    <Carousel>
      <Carousel.Item>
        <div className="relative font-sans text-white">
          <WelcomeImage2 className="w-full" />
          <div className="absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 transform">
            <ShopNowButton />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="relative h-fit font-sans text-white">
          <WelcomeImage3 className="w-full" />
          <div className="absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 transform">
            <ShopNowButton />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </>
}

export default Welcome