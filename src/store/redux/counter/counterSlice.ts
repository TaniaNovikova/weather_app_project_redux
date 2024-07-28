import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { CounterSliceState } from "./types"

//default state for GobalState
const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count += 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count -= 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
<<<<<<< HEAD
        // action - это обьект состояний из 2 св-в
        // 1 - type- строка, тип экшена, по которому у нас вызывется reducer
        // 2 - payload - это данные, которые вы хотите передать из компонента в reducer
        console.log(action.payload)
        state.count =  Number((state.count * action.payload).toFixed(2))
=======
        state.count *= action.payload
>>>>>>> 8113f9a9ca730643c7a3835cb39b326506344e5e
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count /= action.payload
      },
    ),
  }),
  selectors: { count: (state: CounterSliceState) => state.count },
})

export const counterSliceActions = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors
