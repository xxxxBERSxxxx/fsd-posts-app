import { baseApi } from '../../../app/providers/store/baseApi';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todo' as const, id })),
              { type: 'Todo', id: `USER_${userId}` },
            ]
          : [{ type: 'Todo', id: `USER_${userId}` }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosByUserQuery } = todosApi;