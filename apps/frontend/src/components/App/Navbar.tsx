import useAuth from "@hooks/useAuth";
import Link from "next/link";
import { styled } from "styled-components";
import colors from "ui/config/theme";

const Nav = styled.nav`
  width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary[100]};
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  const { user } = useAuth();

  return (
    <Nav>
      <StyledLink href="/">HOSTYN</StyledLink>
      {user == null ? (
        <StyledLink href="/auth">Login</StyledLink>
      ) : (
        <StyledLink href="/user">{user.email}</StyledLink>
      )}
    </Nav>
  );
}
