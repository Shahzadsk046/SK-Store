import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Admin from "./admin/Admin"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./Pages/Success";
import {useSelector} from "react-redux";

const App = () => {
  // const isAdmin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  const isAdmin = useSelector(state => state.user.currentUser.isAdmin);
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        {/* {isAdmin ? <Route exact path="/admin" element={<Admin />} /> :( */}
         {/* <> */}
        <Route exact path="/" element={isAdmin ? <Admin/> : <Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/success" element={<Success />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
          />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
          />
          {/* </> */}
        {/* ) } */}
      </Routes>
    </Router>
  );
};

export default App;
