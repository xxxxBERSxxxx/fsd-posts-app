import { baseApi } from '../../../app/providers/store/baseApi';

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query<Album[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Album' as const, id })),
              { type: 'Album', id: `USER_${userId}` },
            ]
          : [{ type: 'Album', id: `USER_${userId}` }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAlbumsByUserQuery } = albumsApi;