import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: []   
}

export const fetchArticlesBySub = createAsyncThunk(
    'article/fetchArticlesBySub',
    async (subreddit, thunkAPI) => {
        const resp = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=100`)
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

    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesBySub.fulfilled, (state, action) => {
            state.articles = action.payload
        })
    }
})

export const selectArticles = (state) => state.articles

export default articleSlice.reducer