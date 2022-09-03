import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { persistStore } from "redux-persist";
// import {store, Persistor} from "./redux/store";

let persistor = persistStore(store);

ReactDOM.render(
  //   <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* </Provider>, */}
    {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById("root")
);
