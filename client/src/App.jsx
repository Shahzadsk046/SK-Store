import Home from "./user/pages/Home";
import ProductList from "./user/pages/ProductList";
import Product from "./user/pages/Product";
import Register from "./Register";
import Login from "./Login";
import Cart from "./user/pages/Cart";
import Sidebar from "./admin/components/sidebar/Sidebar";
import Topbar from "./admin/components/topbar/Topbar";
import "./App.css";
import AdminHome from "./admin/pages/home/Home";
import AdminUserList from "./admin/pages/userList/UserList";
import AdminUser from "./admin/pages/user/User";
import AdminNewUser from "./admin/pages/newUser/NewUser";
import AdminProductList from "./admin/pages/productList/ProductList";
import AdminProduct from "./admin/pages/product/Product";
import AdminNewProduct from "./admin/pages/newProduct/NewProduct";
import Success from "./Success";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  // const isAdmin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {!user ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      ) : isAdmin ? (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<AdminHome />} />
              <Route path="/users" element={<AdminUserList />} />
              <Route path="/user/:userId" element={<AdminUser />} />
              <Route path="/newUser" element={<AdminNewUser />} />
              <Route path="/products" element={<AdminProductList />} />
              <Route path="/product/:productId" element={<AdminProduct />} />
              <Route path="/newproduct" element={<AdminNewProduct />} />
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
            </Routes>
          </div>
        </>
      ) : (
        <>
          {/* <div className="container"> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/products/:category"
                element={<ProductList />}
              />
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
            </Routes>
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default App;
