import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Task = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const initialState: { [name: string]: Task } = {};

const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state[action.payload.id] = action.payload;
    },
    addTasks: (state, action: PayloadAction<Task[]>) => {
      action.payload.forEach((task: Task) => {
        state[task.id] = task;
      })
    },
  },
})

export const { addTask } = counterSlice.actions;
export default counterSlice.reducer