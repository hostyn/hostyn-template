import Link from "next/link";
import { styled } from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 400px;
`;

export default function Navbar() {
  return (
    <Nav>
      <h1>HOSTYN</h1>
      <Link href="/auth">Login</Link>
    </Nav>
  );
}
