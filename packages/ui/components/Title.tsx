import { styled } from "styled-components";
import colors from "../config/theme";

interface TitleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize ?? "2rem"};
  line-height: ${(props) => props.fontSize ?? "2rem"};
  color: ${(props) => props.color ?? "inherit"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
`;

export default Title;
