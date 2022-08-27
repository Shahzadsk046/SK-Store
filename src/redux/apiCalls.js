import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  // addUserFailure,
  // addUserStart,
  // addUserSuccess,
  // deleteUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess,
  // updateUserFailure,
  // updateUserStart,
  // updateUserSuccess,
} from "./usersRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id, product, dispatch) => {
  console.log(id, product, dispatch);
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    console.log(res.data);
    // dispatch(updateProductSuccess({ id, product }));
    dispatch(updateProductSuccess(res.data._id, res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

// export const deleteUsers = async (id, dispatch) => {
//   dispatch(deleteUserStart());
//   try {
//     await userRequest.delete(`/users/${id}`);
//     dispatch(deleteUserSuccess(id));
//   } catch (err) {
//     dispatch(deleteUserFailure());
//   }
// };

// export const updateUsers = async (id, user, dispatch) => {
//   console.log(id, user, dispatch);
//   dispatch(updateUserStart());
//   try {
//     const res = await userRequest.put(`/users/${id}`, user);
//     console.log(res.data);
//     // dispatch(updateUserSuccess({ id, user }));
//     dispatch(updateUserSuccess(res.data._id, res.data));
//   } catch (err) {
//     dispatch(updateUserFailure());
//   }
// };

// export const addUsers = async (user, dispatch) => {
//   dispatch(addUserStart());
//   try {
//     const res = await userRequest.post(`/users/`, user);
//     dispatch(addUserSuccess(res.data));
//   } catch (err) {
//     dispatch(addUserFailure());
//   }
// };
