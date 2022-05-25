import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './articleSlice'
import placesReducer from './placeSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
    places: placesReducer,
  },
})
