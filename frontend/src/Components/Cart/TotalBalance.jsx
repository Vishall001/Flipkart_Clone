import { Typography, styled, Box } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;

const TotalBalance = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const TotalAmount = () => {
    let price = 0;
    let discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp ;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    TotalAmount();
  }, [cartItems]);
  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>

      <Container>
        <Typography>
          Price({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>{" "}
        <Typography>
          Delivery charges
          <Price component="span">₹40</Price>
        </Typography>{" "}
        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>{" "}
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalBalance;
