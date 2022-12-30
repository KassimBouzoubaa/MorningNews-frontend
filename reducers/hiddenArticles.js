import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHiddenArticles: (state, action) => {
			state.value.push(action.payload);
		},
        delHiddenArticles: (state, action) => {
			state.value = state.value.filter(hidden => hidden.title !== action.payload.title);
		},
        delAllHiddenArticles: (state) => {
            state.value = []
        },
	},
});

export const { addHiddenArticles, delHiddenArticles, delAllHiddenArticles} = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;