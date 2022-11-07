import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './productsSlice/productsSlice'

export default configureStore({
  reducer: {
    products: productsSlice,
  }
})