import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi'; 
import postsReducer from '../../../entities/post/model/slice/postSlice';
import usersReducer from '../../../entities/user/model/slice/userSlice';



export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;