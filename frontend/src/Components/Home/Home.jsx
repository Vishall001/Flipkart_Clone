import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const {products} = useSelector((state) => state.getProducts);
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;
