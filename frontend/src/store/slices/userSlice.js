import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    likedArticles: [],
  },
  reducers: {
    addUserInfo(state, action) {
      return {
        ...state,
        user: action.payload,
      }
    },
    addLikedArticles(state, action) {
      if (state.likedArticles[0]) state.likedArticles[0].push(action.payload)
      else state.likedArticles.push(action.payload)
    },
  },
})

export const { addUserInfo, addLikedArticles } = userSlice.actions

export default userSlice.reducer
