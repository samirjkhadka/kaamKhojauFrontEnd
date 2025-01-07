import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import userReducer from "./slices/userSlice";
import { updateProfile } from "./slices/updateProfileSlice";
import applicationReducer from "./slices/applicationSlice";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    user: userReducer,
    updateProfile: updateProfile,
    applications: applicationReducer,
  },
});

export default store;
