import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { postsApi } from '../../../post/api/postsApi';
import { User } from '../types';
import { RootState } from '../../../../app/providers/store/store';

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    upsertUser: usersAdapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
      const usersMap = new Map<number, User>();
      action.payload.forEach((post) => {
        if (!usersMap.has(post.userId)) {
          usersMap.set(post.userId, { id: post.userId } as User);
        }
      });
      const users = Array.from(usersMap.values());
      usersAdapter.upsertMany(state, users);
    });
  },
});

export const { addUser, upsertUser } = userSlice.actions;
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default userSlice.reducer;