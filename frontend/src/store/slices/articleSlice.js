import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: {},
  },
  reducers: {
    addArticle(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.articles = action.payload
    },
  },
})

export const { addArticle } = articleSlice.actions

export default articleSlice.reducer
