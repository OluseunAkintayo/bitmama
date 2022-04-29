import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
	user: null,
	gitProfile: null,
	loading: false,
}

const URL = `https://api.github.com/users/`;

export const getGitUser = createAsyncThunk("user/getGitUser", (username) => {
	return fetch(URL + username).then(res => res.json()).catch(err => console.log(err))
});

export const mainSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser: (state, action)=> {
			state.user = action.payload
		}
	},
	extraReducers: {
		[getGitUser.pending]: state => {
			state.loading = true
		},
		[getGitUser.fulfilled]: (state, action) => {
			console.log(action);
			state.gitProfile = action.payload
			state.loading = false
		},
		[getGitUser.rejected]: state => {
			state.loading = false
		}
	}
});

export const { getUser } = mainSlice.actions;
export default mainSlice.reducer;
