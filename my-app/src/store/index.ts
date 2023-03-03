import { configureStore } from '@reduxjs/toolkit'
import imagesSlice from './slices/imagesSlice'
import cardSlice from './slices/cardSlice'


export const store = configureStore({
    reducer: {
      imagesListSection: imagesSlice,
      cardSection: cardSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>