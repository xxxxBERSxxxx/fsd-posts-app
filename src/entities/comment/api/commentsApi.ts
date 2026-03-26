import { baseApi } from '../../../app/providers/store/baseApi';
import { Comment } from '../model/types';

export const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: `POST_${postId}` },
            ]
          : [{ type: 'Comment', id: `POST_${postId}` }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCommentsByPostQuery } = commentsApi;