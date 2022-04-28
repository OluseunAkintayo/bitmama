import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	auth: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state) => { state.auth = true },
		logout: (state) => { state.auth = false },
	}
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;