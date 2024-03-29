import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: [],
    searchTerm: '',
    articlesLoading: false,
    subreddits: [
        'Webdev',
        'Home',
        'AskReddit',
        'PublicFreakout',
        'pics',
        'politics',
        'news',
        'worldnews',
        'funny',
        'NoStupidQuestions',
        'nextfuckinglevel'
    ]   
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
        updateSearchTerm(state, action) {
            state.searchTerm = action.payload.toLowerCase()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesBySub.fulfilled, (state, action) => {
            state.articlesLoading = false
            state.articles = action.payload.filter(article => article.data.title.toLowerCase().includes(state.searchTerm))
        })
        builder.addCase(fetchArticlesBySub.pending, (state) => {
            state.articlesLoading = true
        })
    }
})

export const selectArticles = (state) => state.articles
export const subOptions = (state) => state.subOptions

export const { updateSearchTerm } = articleSlice.actions

export default articleSlice.reducer