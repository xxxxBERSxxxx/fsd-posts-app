import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { postsApi, Post } from '../../api/postsApi';
import { RootState } from '../../../../app/providers/store/store';

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

interface PostsState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState = postsAdapter.getInitialState<PostsState>({
  loading: 'idle',
  error: null,
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
        state.loading = 'succeeded';
        postsAdapter.setAll(state, action.payload);
      })
     
      .addMatcher(postsApi.endpoints.getPostById.matchFulfilled, (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      })
    
      .addMatcher(postsApi.endpoints.addPost.matchFulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      })
    
      .addMatcher(postsApi.endpoints.updatePost.matchFulfilled, (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      })
    
      .addMatcher(postsApi.endpoints.deletePost.matchFulfilled, (state, action) => {
        postsAdapter.removeOne(state, action.meta.arg.originalArgs);
      })
      
      .addMatcher(postsApi.endpoints.getPosts.matchPending, (state) => {
        state.loading = 'pending';
      })
      .addMatcher(postsApi.endpoints.getPosts.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Ошибка загрузки постов';
      });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);

export default postSlice.reducer;