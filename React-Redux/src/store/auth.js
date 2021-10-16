import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuth: false
  };
  
  const authSlice =  createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
      logIn(state) {
        state.isAuth = true;
      },
      logOut(state) {
        state.isAuth = false;
      }
    }
  });
  export const authActions = authSlice.actions;
  export default authSlice.reducer;