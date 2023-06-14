import useAuth from "@hooks/useAuth";
import { useState } from "react";
import { styled } from "styled-components";
import Input from "ui/components/Input";
import Text from "ui/components/Text";
import colors from "ui/config/theme";

const AuthDiv = styled.div`
  min-height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.green[500]};
  border-radius: 5px;
  padding: 5px 10px;

  color: ${colors.green[500]};
  font-weight: bold;
  font-size: 1rem;

  cursor: pointer;
`;

export default function Auth() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login } = useAuth();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser((user) => ({ ...user, [target.name]: target.value }));
  };

  const handleLogin = () => {
    login(user.email, user.password);
  };

  return (
    <AuthDiv>
      <h1>Login</h1>
      <Text>Try with test@test.com and testtest</Text>
      <Input placeholder="Email" name="email" onChange={handleChange} />
      <Input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        type="password"
      />
      <Button onClick={handleLogin}>Login</Button>
    </AuthDiv>
  );
}
