import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
  isLoggedIn?: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
    },
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: { user: UserState; }) => state.user;
export default userSlice.reducer;
