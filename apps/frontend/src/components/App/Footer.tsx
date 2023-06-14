import { styled } from "styled-components";
import colors from "ui/config/theme";

const StyledFooter = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const A = styled.a`
  color: ${colors.primary[100]};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <A href="https://github.com/hostyn" target="_blank">
        @hostyn
      </A>
    </StyledFooter>
  );
}
