import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const isAdmin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        {isAdmin ? (
          <Navigate to="https://sk-store.netlify.app/admin" replace />
        ) : (
          <>
            <Route
              exact
              path="https://sk-store.netlify.app/"
              element={<Home />}
            />
            <Route
              exact
              path="https://sk-store.netlify.app/products/:category"
              element={<ProductList />}
            />
            <Route
              exact
              path="https://sk-store.netlify.app/product/:id"
              element={<Product />}
            />
            <Route
              exact
              path="https://sk-store.netlify.app/cart"
              element={<Cart />}
            />
            <Route
              exact
              path="https://sk-store.netlify.app/success"
              element={<Success />}
            />
            <Route
              exact
              path="https://sk-store.netlify.app/login"
              element={
                user ? (
                  <Navigate to="https://sk-store.netlify.app/" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="https://sk-store.netlify.app/register"
              element={
                user ? (
                  <Navigate to="https://sk-store.netlify.app/" replace />
                ) : (
                  <Register />
                )
              }
            />
          </>
        )}
      </Routes>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </Router>
  );
};

export default App;
