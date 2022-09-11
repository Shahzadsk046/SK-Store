import styled from "styled-components";
import { Facebook, Instagram, Twitter, GitHub, Room, Phone, MailOutline } from "@material-ui/icons";
import Payment1 from '../../images/payment2.png';
import { xsmall, medium, small } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${small({flexDirection: "column"})}
  /* ${xsmall({flexDirection: "column"})} */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${xsmall({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${medium({flexDirection: "column"})}
  ${small({flexDirection: "row"})}
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${small({backgroundColor: "#fff8f8"})}
  /* ${xsmall({backgroundColor: "#fff8f8"})} */
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SK STORE</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          architecto quas rem totam iusto, recusandae accusamus sapiente esse
          nisi magnam modi illum minima eveniet harum voluptatibus voluptate
          mollitia temporibus expedita.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="000">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          {/* <ListItem>Wishlist</ListItem> */}
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: '10px'}} /> Shop # D-5, Beach Blessing Center, Block-2, Clifton, Karachi,
          75600 Pakistan
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: '10px'}} /> +92 311 2057547
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: '10px'}} /> shahzad.sk046@gmail.com
        </ContactItem>
        <Payment src={Payment1}/>
      </Right>
    </Container>
  );
};

export default Footer;
