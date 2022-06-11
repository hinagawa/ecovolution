import { createSlice } from '@reduxjs/toolkit'

const placeSlice = createSlice({
  name: 'places',
  initialState: {
    places: '',
  },
  reducers: {
    addPlace(state, action) {
      return {
        ...state,
        places: action.payload,
      }
    },
  },
})

export const { addPlace } = placeSlice.actions

export default placeSlice.reducer
