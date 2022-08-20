import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import {
  //   persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userRedux from "./userRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    // cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore(persistedReducer, applyMiddleware())

export default configureStore({
  // export const store = () => configureStore({
  reducer: persistedReducer,
  // reducer: persistedReducer,
  // middleware: applyMiddleware()
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const Persistor = persistStore(store);

// export default store;
// export {store, Persistor};
