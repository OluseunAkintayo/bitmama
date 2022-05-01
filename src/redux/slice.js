import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
	authUser: null,
	gitUser: {
		data: null,
		isLoading: false,
	},
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
		},
		updateRepos: (state, action)=> {
			state.repos.data = action.payload
		}
	},
	extraReducers: {
		[getGitUser.pending]: state => {
			state.gitUser.loading = true
		},
		[getGitUser.fulfilled]: (state, action) => {
			state.gitUser.data = action.payload
			state.gitUser.loading = false
		},
		[getGitUser.rejected]: state => {
			state.gitUser.loading = false
		},
		[getRepos.pending]: state => {
			state.repos.loading = true
		},
		[getRepos.fulfilled]: (state, action) => {
			state.repos.data = action.payload.slice(0, 20);
			localStorage.setItem('repos', JSON.stringify(action.payload.slice(0, 20)));
			state.repos.loading = false
		},
		[getRepos.rejected]: state => {
			state.repos.loading = false
		}
	}
});

export const { getUser, updateRepos } = mainSlice.actions;
export default mainSlice.reducer;
