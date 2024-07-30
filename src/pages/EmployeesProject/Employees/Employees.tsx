import { ReactNode } from "react"
import { useAppSelector, useAppDispatch } from "store/hooks"
import { v4 } from "uuid"

import Employees_Card from "pages/EmployeesProject/components/EmployeesСard/EmployeesCard"
import Button from "components/Button/Button"

import { PageWrapper, EmployeesWrapper, DeleteButtonControl } from "./styles"
import { Employee } from "pages/EmployeesProject/LayoutEmployeesProject/types"
import {
  employeesSliceAction,
  employeesSliceSelectors,
} from "store/redux/employees/employeesSlice"

function Employees() {
  const dispach = useAppDispatch()

  const createEmployees = useAppSelector(employeesSliceSelectors.employees)

  const deleteAllCards = () => {
    dispach(employeesSliceAction.deleteAllCards())
  }

  const getEmployeesCards = (employees: Employee[]): ReactNode[] =>
    employees.map((emlpoyeeObj: Employee) => {
      return <Employees_Card key={v4()} employee={emlpoyeeObj} />
    })

  let areEmployeesExisting: boolean = createEmployees.length !== 0

  return (
    <PageWrapper>
      <EmployeesWrapper>{getEmployeesCards(createEmployees)}</EmployeesWrapper>
      <DeleteButtonControl>
        {areEmployeesExisting && (
          <Button
            name="Remove all employees"
            onClick={deleteAllCards}
            isRed={true}
          />
        )}
      </DeleteButtonControl>
    </PageWrapper>
  )
}

export default Employees
