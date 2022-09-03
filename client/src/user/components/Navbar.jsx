import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {small, xsmall} from "../../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${xsmall({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${xsmall({padding: "10px 0px"})}
  ${small({padding: "10px 10px"})}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-style: 14px;
  cursor: pointer;
  ${xsmall({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${xsmall({marginLeft: "5px"})}
`;

const Input = styled.input`
  border: none;
  ${xsmall({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${xsmall({fontSize: "20px"})}
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${xsmall({flex: "2", justifyContent: "center"})}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
  ${xsmall({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize: "16px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SK STORE</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
