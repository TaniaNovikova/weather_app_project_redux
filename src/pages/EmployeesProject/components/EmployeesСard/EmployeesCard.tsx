import { useAppDispatch } from "store/hooks"

import Button from "components/Button/Button"

import { EmployeeCardProps } from "./types"

import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles"
import { employeesSliceAction } from "store/redux/employees/employeesSlice"

function Employees_Card({ employee }: EmployeeCardProps) {
  const dispatch = useAppDispatch()
  const deleteCard = () => {
    dispatch(employeesSliceAction.deleteCard(employee))
  }
  return (
    <EmployeesCard>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{employee.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{employee.surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{employee.age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{employee.jobPosition}</TextContent>
      </TextDiv>
      <Button name="Delete" isRed={true} onClick={deleteCard} />
    </EmployeesCard>
  )
}

export default Employees_Card
