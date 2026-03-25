import { baseApi } from '../../../app/providers/store/baseApi';

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const photosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPhotosByAlbum: builder.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result, error, albumId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photo' as const, id })),
              { type: 'Photo', id: `ALBUM_${albumId}` },
            ]
          : [{ type: 'Photo', id: `ALBUM_${albumId}` }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPhotosByAlbumQuery } = photosApi;