import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '@/app/types/types';

export const tasksApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => `posts`,
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi;