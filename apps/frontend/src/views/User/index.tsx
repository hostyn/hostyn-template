import useAuth from "@hooks/useAuth";
import { styled } from "styled-components";
import Span from "ui/components/Span";
import colors from "ui/config/theme";

const UserDiv = styled.div`
  min-height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.red[500]};
  border-radius: 5px;
  padding: 5px;

  color: ${colors.red[500]};
  font-weight: bold;
  font-size: 1rem;

  cursor: pointer;
`;

export default function User() {
  const { user, logout } = useAuth();

  return (
    <UserDiv>
      <h1>
        Hi, <Span>{user?.email}</Span>
      </h1>
      <Button onClick={logout}>Logout</Button>
    </UserDiv>
  );
}
