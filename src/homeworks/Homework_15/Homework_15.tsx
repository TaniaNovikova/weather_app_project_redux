import { useState } from "react"

import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import {
  PageWrapper,
  ButtonControl,
  StyledLabel,
  StyledInputWrapper,
} from "./styles"
import { CounterProps } from "../../components/Counter/types"
import { number } from "yup"

function Homework_15() {
  const [count, setCount] = useState<number>(0)
  const onPlus = () => {
    setCount((prevValue: number) => prevValue + 1)
  }
  const onMinus = () => {
    setCount((prevValue: number) => prevValue - 1)
  }

  return (
    <PageWrapper>
      <ButtonControl>
        <Button name="Button" />
      </ButtonControl>
      <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
      <StyledInputWrapper>
        <StyledLabel>
          Label:
          <Input
            id="homework_15_input_id"
            name="homework_15_input_name"
            label=""
          />
        </StyledLabel>
      </StyledInputWrapper>
    </PageWrapper>
  )
}
export default Homework_15
