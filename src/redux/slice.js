import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: null
}

export const mainSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser: (state, action)=> {
			state.user = action.payload
		}
	}
});

export const { getUser } = mainSlice.actions;
export default mainSlice.reducer;