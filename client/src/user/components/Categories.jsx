import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { small, xsmall } from "../../responsive";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  ${xsmall({padding: "0px", flexDirection:"column"})}
  ${small({padding: "20px 0px", flexDirection:"column"})}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
