import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
// import SHOES1 from "../../images/shoes1.png";
import LOGO from "../../images/logo.png";
import { Add, Delete, Remove } from "@material-ui/icons";
import { medium, small, xsmall } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import {
  // Navigate,
  useNavigate,
} from "react-router-dom";
import {
  clearAllCart,
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "../../redux/cartRedux";

const KEY =
  "pk_test_51LVFW7BLVVEbvQhO2Wpunjvyt5ZRqcjdjxQuz7mdXnZOfX2Wh6H7C1LgnQvZBS2V4FpV60cmdeXkfIK85wdAYmio002F0JoVUv";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${small({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${small({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${medium({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${xsmall({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductClear = styled.div`
  font-size: 24px;
  margin: 5px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${small({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${small({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  // let total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  // let products = useSelector((state) => state.cart.products);

  // var cartTotal = cart.total;
  // const {quantity, ...others} = cart.products;
  let {
    products,
    quantity,
    // total
  } = cart;
  const [stripeToken, setStripeToken] = useState(null);
  // const [pQuantity, setPQuantity] = useState(
  //   products.map((product) => product.quantity)
  // );
  // cart.products.map((product)=>(
  // ))
  // setPQuantity(cart.quantity)
  console.log(cart);
  console.log(products);
  console.log(quantity);
  // console.log(total);
  // console.log(cartTotal);

  const getTotal = () => {
    let totalQty = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQty += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    // console.log(total)
    // console.log(cartTotal)
    console.log(cart.total)
    // total = totalPrice;
    return { totalPrice, totalQty };
  };

  // total = getTotal().totalPrice;

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleDecrease = (product) => {
    product.quantity > 1 && dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(increaseCart(product));
  };

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  const handleClear = (productItem) => {
    dispatch(removeFromCart(productItem));
  };

  // const handleChange = ({ target }) => {

  //   // cart.products.map((product)=>(
  //   //   setPQuantity({...quantity, [productQuantity] : product.quantity})
  //   //   ))
  //   setPQuantity({
  //     ...quantity,
  //     [target._id]: target.value
  //   })
  // }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          // amount: 10000,
          amount: cart.total * 100,
        });
        console.log(res.data);
        dispatch(clearAllCart());
        navigate("/", {
          replace: true,
          data: res.data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    // const handleDecrease = (product) => {
    //   product.quantity > 1 && dispatch(decreaseCart(product));
    // };

    // const handleIncrease = (product) => {
    //   dispatch(increaseCart(product));
    // };

    stripeToken && makeRequest();
    // handleDecrease()
    // handleIncrease()
  }, [stripeToken, cart.total, navigate, dispatch]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={handleClick}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="SK STORE"
            image={LOGO}
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {products.map((product, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductClear
                    onClick={() => {
                      handleClear(product);
                    }}
                  >
                    <Delete />
                  </ProductClear>
                  <ProductAmountContainer>
                    <Remove onClick={() => handleDecrease(product)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add onClick={() => handleIncrease(product)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              {/* <SummaryItemPrice>$ {cart.total}</SummaryItemPrice> */}
              <SummaryItemPrice>$ {getTotal().totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {getTotal().totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="SK STORE"
              image={LOGO}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
