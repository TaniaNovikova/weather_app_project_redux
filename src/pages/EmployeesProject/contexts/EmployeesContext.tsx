import {
  useState,
  createContext,
  PropsWithChildren,
  SetStateAction,
} from "react"

import {
  LayoutProps,
  Employee,
} from "pages/EmployeesProject/LayoutEmployeesProject/types"

export interface EmployeeContextType {
  employees: Employee[]
  setEmployees: React.Dispatch<SetStateAction<Employee[]>>
}

export const EmployeesContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
})

function EmployeesContextProvider({
  children,
}: PropsWithChildren<LayoutProps>) {
  const [employee, setEmployee] = useState<Employee[]>([])

  return (
    <EmployeesContext.Provider
      value={{ employees: employee, setEmployees: setEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesContextProvider
