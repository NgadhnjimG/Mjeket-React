import { createSlice, configureStore } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    saveToken: (state, token) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = token;
    },
    clear: (state) => {
      state.token = "";
    },
  },
});
export const { saveToken, clear } = tokenSlice.actions;
export default tokenSlice.reducer;
