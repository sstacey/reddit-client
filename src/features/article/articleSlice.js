import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: [],
    searchTerm: ''   
}

export const fetchArticlesBySub = createAsyncThunk(
    'article/fetchArticlesBySub',
    async (thunkAPI) => {
        const resp = await fetch(`https://www.reddit.com/r/webdev.json?limit=100`)
        const jsonResp = await resp.json()
        if (jsonResp.error) {
            return []
        }
        return jsonResp.data.children
    }
)

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        updateSearchTerm(state, action) {
            state.searchTerm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesBySub.fulfilled, (state, action) => {
            state.articles = action.payload
        })
    }
})

export const selectArticles = (state) => state.articles

export const { updateSearchTerm } = articleSlice.actions

export default articleSlice.reducer