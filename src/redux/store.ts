import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type typeRootReducer = ReturnType<typeof rootReducer>
type typeStore = typeof store
export type typeDispatch = typeStore['dispatch']