import styled from "@emotion/styled";
import React from "react";

import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")({
  width: "100%",
  height: 280,
});

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      slidesToSlide={1}
      showDots={false}
      keyBoardControl={true}
    >
      {bannerData.map((data) => {
        return <Image src={data.url} alt="Banner" key={data.id} />;
      })}
    </Carousel>
  );
};

export default Banner;
