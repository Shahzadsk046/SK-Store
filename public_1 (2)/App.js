import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const isAdmin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  // let history = Redirec;

  return (
    <Router>
      <Routes>
        <Route path="https://sk-store.netlify.app/login">{isAdmin ? <Navigate to="https://sk-store.netlify.app/admin" replace /> : <Login />}</Route>
        {isAdmin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="https://sk-store.netlify.app/admin" element={<Home />} />
              <Route exact path="https://sk-store.netlify.app/admin/users" element={<UserList />} />
              <Route exact path="https://sk-store.netlify.app/admin/user/:userId" element={<User />} />
              <Route exact path="https://sk-store.netlify.app/admin/newUser" element={<NewUser />} />
              <Route exact path="https://sk-store.netlify.app/admin/products" element={<ProductList />} />
              <Route exact path="https://sk-store.netlify.app/admin/product/:productId" element={<Product />} />
              <Route exact path="https://sk-store.netlify.app/admin/newproduct" element={<NewProduct />} />
              <Route path="*" element="404 Not Found"/>
            </div>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
