import styled from "@emotion/styled";
import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {
            timer && <Timer>
            <img src={timerURL} alt="Timer" style={{ width: "24px" }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        }
        <ViewAllButton variant="contained" color="primary">
          view all
        </ViewAllButton>
      </Deal>
      <Divider />
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
        showDots={false}
        centerMode={true}
        keyBoardControl={true}
      >
        {products.map((pro) => {
          return (
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={pro.url} alt="" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {pro.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{pro.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {pro.tagline}
              </Text>
            </Box>
          );
        })}
      </Carousel>
    </Component>
  );
};

export default Slide;
