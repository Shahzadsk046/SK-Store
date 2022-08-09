import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({ marginTop: "10px" })}
  ${tablet({height: "50vh"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
  ${tablet({ height: "100%", width:"100%" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({textAlign: "center"})}
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  /* font-size: 1.6rem; */
  ${tablet({fontSize: "1.5rem"})}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Categoryitem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default Categoryitem;
