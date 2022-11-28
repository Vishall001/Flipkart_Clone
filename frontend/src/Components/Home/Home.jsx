import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Container = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Home = () => {
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
