import { createAppSlice } from "store/createAppSlice"
import { EmployeesSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

import { Employee } from "pages/EmployeesProject/LayoutEmployeesProject/types"

const employeesInitialState = {
  employees: [],
}

export const employeesSlice = createAppSlice({
  name: "EMPLOYEES",

  initialState: employeesInitialState,
  reducers: create => ({
    createEmployee: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        state.employees = [...state.employees, { ...action.payload, id: v4() }]
      },
    ),

    deleteCard: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        state.employees = state.employees.filter(
          employeeObject => employeeObject.id !== action.payload.id,
        )
      },
    ),
    deleteAllCards: create.reducer(() => employeesInitialState),
  }),
  selectors: { employees: (state: EmployeesSliceState) => state.employees },
})

export const employeesSliceAction = employeesSlice.actions
export const employeesSliceSelectors = employeesSlice.selectors
