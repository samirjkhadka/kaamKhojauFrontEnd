import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    message: null,
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    registerRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
      state.user = {};
      state.isAuthenticated = false;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
      state.user = {};
      state.isAuthenticated = false;
    },
    loginRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
      state.user = {};
      state.isAuthenticated = false;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
      state.user = {};
      state.isAuthenticated = false;
    },
    fetchUserRequest(state, action) {
      state.loading = true;
      state.error = null;

      state.user = {};
      state.isAuthenticated = false;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.error = null;

      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    fetchUserFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutSuccess(state, action) {
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    logoutFailed(state, action) {
      state.isAuthenticated = state.isAuthenticated;
      state.user = state.user;
      state.error = action.payload;
    },
    clearAllErrors(state, action) {
      state.error = null;
      state.user = state.user;
    },
  },
});

export const register = (data) => async (dispatch) => {
  dispatch(userSlice.actions.registerRequest());
  try {
    const response = await axios.post(
      "https://kaam-hryi.onrender.com/api/v1/users/registerUser",
      data,
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    dispatch(userSlice.actions.registerSuccess(response.data));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.registerFailed(error.response.data.message));
  }
};
export const login = (data) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());
  try {
    const response = await axios.post(
      "https://kaam-hryi.onrender.com/api/v1/users/loginUser",
      data,
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    dispatch(userSlice.actions.loginSuccess(response.data));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.loginFailed(error.response.data.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchUserRequest());
  try {
    const response = await axios.get(
      "https://kaam-hryi.onrender.com/api/v1/users/getUser",
      { withCredentials: true }
    );
    dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.fetchUserFailed(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://kaam-hryi.onrender.com/api/v1/users/logout",
      { withCredentials: true }
    );
    dispatch(userSlice.actions.logoutSuccess(response.data.message));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.logoutFailed(error.response.data.message));
  }
};

export const clearAllUserErrors = () => (dispatch) => {
  dispatch(userSlice.actions.clearAllErrors());
};
export default userSlice.reducer;
