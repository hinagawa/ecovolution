import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    likedArticles: [],
  },
  reducers: {
    addArticle(state, action) {
      state.articles.push(action.payload)
    },
    addLikedArticle(state, action) {
      state.likedArticles.push(action.payload)
    },
  },
})

export const { addArticle, addLikedArticle } = articleSlice.actions

export default articleSlice.reducer
