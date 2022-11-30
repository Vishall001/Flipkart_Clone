import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <Slide products={products} title="Discount for You" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended items" timer={false} />
        <Slide products={products} title="Trending items" timer={false} />
        <Slide products={products} title="Seasons top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals of Accessories"
          timer={false}
        />
      </Container>
    </>
  );
};

export default Home;
