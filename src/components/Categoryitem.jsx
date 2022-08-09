import styled from "styled-components";
import { xsmall, medium, small } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${xsmall({ marginTop: "10px" })}
  ${medium({height: "50vh"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${medium({ height: "100%", width:"100%" })}
  ${small({ height: "50vh" })}
  ${xsmall({ height: "20vh" })}
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
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${medium({fontSize: "1.5rem"})}
  ${small({fontSize: "2rem"})}
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
