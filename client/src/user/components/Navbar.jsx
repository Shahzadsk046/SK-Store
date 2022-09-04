import { Badge } from "@material-ui/core";
import { ExitToApp, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { small, xsmall } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logout } from "../../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${xsmall({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${xsmall({ padding: "10px 0px" })}
  ${small({ padding: "10px 10px" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-style: 14px;
  cursor: pointer;
  ${xsmall({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${xsmall({ marginLeft: "5px" })}
`;

const Input = styled.input`
  border: none;
  ${xsmall({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${xsmall({ fontSize: "20px" })}
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${xsmall({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.a`
  margin-left: 25px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  ${xsmall({ fontSize: "12px", marginLeft: "10px" })}
`;

const Icon = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  /* color: #555; */
  min-width: 80px;
  width: 15%;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  console.log(quantity);
  console.log(user);

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch, user);
    <Navigate to="/login" replace />;
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SK STORE</Logo>
        </Center>
        <Right>
          {user ? (
            <Icon onClick={handleClick}>
              Logout &nbsp;<ExitToApp />
            </Icon>
          ) : (
            <>
              <MenuItem href="/register">REGISTER</MenuItem>
              <MenuItem href="/login">SIGN IN</MenuItem>
            </>
          )}
          <Link to={user ? "/cart" : "/login"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
