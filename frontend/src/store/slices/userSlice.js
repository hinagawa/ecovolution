import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
  },
  reducers: {
    addUserInfo(state, action) {
      return {
        ...state,
        user: action.payload,
      }
    },
  },
})

export const { addUserInfo } = userSlice.actions

export default userSlice.reducer
