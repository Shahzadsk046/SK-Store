import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    // GET ALL USERS
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // // DELETE USER
    // deleteUserStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // deleteUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.users.splice(
    //     state.users.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    // },
    // deleteUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // // UPDATE USER
    // updateUserStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // updateUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.users[
    //     state.users.findIndex((item) => item._id === action.payload.id)
    //   ] = action.payload.user;
    // },
    // updateUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    
    // // ADD USER
    // addUserStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // addUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.users.push(action.payload);
    // },
    // addUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
  // updateUserStart,
  // updateUserSuccess,
  // updateUserFailure,
  // addUserStart,
  // addUserSuccess,
  // addUserFailure,
} = usersReducer.actions;

export default usersReducer.reducer;
