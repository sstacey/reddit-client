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
            state.searchTerm = action.payload.toLowerCase()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesBySub.fulfilled, (state, action) => {
            state.articles = action.payload.filter(article => article.data.title.toLowerCase().includes(state.searchTerm))
        })
    }
})

export const selectArticles = (state) => state.articles

export const { updateSearchTerm } = articleSlice.actions

export default articleSlice.reducer