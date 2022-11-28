import React from "react";
import { InputBase, Box } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const SearchIconwrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display:flex
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size:unset;
`;
const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more " />
      <SearchIconwrapper>
        <SearchIcon />
      </SearchIconwrapper>
    </SearchContainer>
  );
};

export default Search;
