import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 50px;
  padding: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PRIMARY};
`;
export const ButtonControl = styled.div`
width: 300px;
`
export const StyledLabel = styled.label`
font: 1em sans-serif;
color: white;
`
export const StyledInputWrapper = styled.div`
width: 300px
`