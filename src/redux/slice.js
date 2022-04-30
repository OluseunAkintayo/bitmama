import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
	authUser: null,
	gitUser: null,
	repos: {
		data: [],
		loading: false,
	},
	loading: false,
}

const URL = `https://api.github.com/users/`;

export const getGitUser = createAsyncThunk("user/getGitUser", (username) => {
	return fetch(URL + username).then(res => res.json()).catch(err => console.log(err));
});

export const getRepos = createAsyncThunk("user/getRepos", (username) => {
	return fetch(URL + username + '/repos').then(res => res.json()).catch(err => console.log(err));
});

export const mainSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser: (state, action)=> {
			state.authUser = action.payload
		}
	},
	extraReducers: {
		[getGitUser.pending]: state => {
			state.loading = true
		},
		[getGitUser.fulfilled]: (state, action) => {
			state.gitUser = action.payload
			state.loading = false
		},
		[getGitUser.rejected]: state => {
			state.loading = false
		},
		[getRepos.pending]: state => {
			state.repos.loading = true
		},
		[getRepos.fulfilled]: (state, action) => {
			state.repos.data = action.payload
			state.repos.loading = false
		},
		[getRepos.rejected]: state => {
			state.repos.loading = false
		}
	}
});

export const { getUser } = mainSlice.actions;
export default mainSlice.reducer;
