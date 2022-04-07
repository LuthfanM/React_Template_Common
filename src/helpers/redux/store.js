import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './features/authSlice'

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      auth: AuthReducer
    },
  })

export default store
