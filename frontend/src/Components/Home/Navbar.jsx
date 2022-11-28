import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-evenly;
`;
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
const Navbar = () => {
  return (
    <Component>
      {navData.map((data) => {
        return (
          <Container>
            <img src={data.url} atl="Nav" style={{ width: "64px" }} />
            <Text>{data.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};

export default Navbar;
