import { styled } from "styled-components";
import colors from "../config/theme";

interface TextProps {
  fontSize?: string;
  color?: string;
}

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize ?? "1rem"};
  color: ${(props) => props.color ?? "inherit"};
`;

export default Text;
