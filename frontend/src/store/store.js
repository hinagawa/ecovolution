import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './slices/articleSlice'
import placesReducer from './slices/placeSlice'
import userReducer from './slices/userSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
    places: placesReducer,
    user: userReducer,
  },
})
