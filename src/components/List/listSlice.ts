import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { findLastArrIndex } from '../../services/array'

// Define a type for the slice state
interface ListItem {
  id: string
  title: string
  isChecked?: boolean
}
interface ListState {
  list: ListItem[] | null
}

// Define the initial state using that type
const initialState = {
  list: [],
} as ListState

export const listSlice = createSlice({
  name: 'todoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addListItem: (state, action: PayloadAction<ListItem>) => {
      state.list.push(action.payload)
    },
    deleteListItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((i) => i.id !== action.payload)
    },
    checkListItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((i) =>
        i.id === action.payload ? { ...i, isChecked: !i.isChecked } : i
      )
    },
    unCheckListItem: (state, action: PayloadAction<string>) => {
      const filteredArray = state.list.filter((i) => i.id !== action.payload)
      const lastCheckedId = findLastArrIndex(state.list, 'isChecked', true)
      const [target] = state.list.filter((i) => i.id === action.payload)
      if (lastCheckedId !== -1) {
        state.list = [
          ...filteredArray.slice(0, lastCheckedId),
          { ...target, isChecked: false },
          ...filteredArray.slice(lastCheckedId),
        ]
      }
    },
    moveListItemToTop: (state, action: PayloadAction<string>) => {
      state.list = state.list
        .filter((i) => i.id === action.payload)
        .concat(state.list.filter((i) => i.id !== action.payload))
    },
  },
})

export const {
  addListItem,
  deleteListItem,
  checkListItem,
  moveListItemToTop,
  unCheckListItem,
} = listSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectList = (state: RootState) => state.todosList.list

export default listSlice.reducer
