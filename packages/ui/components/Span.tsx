import { styled } from "styled-components";
import colors from "../config/theme";

interface SpanProps {
  color?: string;
  background?: string;
  borderRadius?: string;
  padding?: string;
}

const Span = styled.span<SpanProps>`
  color: ${(props) => props.color ?? colors.primary["500"]};
  background-color: ${(props) => props.background ?? "transparent"};
  border-radius: ${(props) => props.borderRadius ?? "0"};
  padding: ${(props) => props.padding ?? "0"};
`;

export default Span;
