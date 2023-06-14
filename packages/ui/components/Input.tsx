import { styled } from "styled-components";
import colors from "../config/theme";

const Input = styled.input`
  background-color: transparent;
  border: 2px solid ${colors.primary[100]};
  color: ${colors.primary[100]};
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;

  padding: 5px 10px;
  width: 20rem;

  &:focus,
  &:focus-visible {
    outline: 3px solid ${colors.primary[500]};
  }
`;

export default Input;
