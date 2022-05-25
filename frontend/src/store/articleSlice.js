import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
  },
  reducers: {
    addArticle(state, action) {
      state.articles.push(action.payload)
    },
  },
})

export const { addArticle } = articleSlice.actions

export default articleSlice.reducer
