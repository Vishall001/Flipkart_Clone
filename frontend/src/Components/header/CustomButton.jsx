import { Badge, Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { useSelector } from "react-redux";
import { DataContext } from "../../context/Dataprovider";
import Profile from "./Profile";
import {Link} from "react-router-dom"
const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      fontSize: 16,
      alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));


const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration :"none",
  color:"inherit",
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account,setAccount } = useContext(DataContext);
  const  {cartItems} =useSelector(state=>state.cart)
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCartIcon />
        </Badge>

        <Typography style={{marginLeft:"10px"}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
