import React from "react";
import ReactDOM from "react-dom";
import Admin from "./Admin";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Admin />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
