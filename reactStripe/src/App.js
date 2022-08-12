// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import RouteConfig from './Route';
import Pay from "./Pay";
import { Routes, Route } from "react-router-dom";
import Success from "./Success";

function App() {
  return (
    <Routes>
      <Route path="/pay" element={<Pay/>} />
      <Route path="/success" element={<Success/>} />
      {/* <RouteConfig /> */}
    </Routes>
  );
}

export default App;
