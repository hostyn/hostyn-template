import { styled } from "styled-components";
import colors from "../config/theme";

const Button = styled.button`
  display: flex;

  border: 3px solid ${colors.primary[500]};
  border-radius: 10px;
  padding: 5px 25px;

  color: ${colors.primary[500]};
  font-weight: bold;

  background-color: transparent;
`;

export default Button;
