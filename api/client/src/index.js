import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
// import {store, Persistor} from "./redux/store";

let persistor = persistStore(store);

ReactDOM.render(
  //   <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      {/* </Provider>, */}
      {/* </React.StrictMode>, */}
    </Provider>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
