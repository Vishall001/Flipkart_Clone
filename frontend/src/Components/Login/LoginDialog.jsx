import React from "react";
import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

const Component = styled(Box)`
  width: 90vh;
  height: 70vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transforn: none;
  background: #fb6410;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOpt = styled(Button)`
  text-transforn: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClick={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTOp: "20px" }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>Or</Typography>
            <RequestOpt>Request OTP</RequestOpt>
            <CreateAccount>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
