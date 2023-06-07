import { trpc } from "@services/trpc";

export default function Home() {
  const login = trpc.auth.login.useMutation();
  const logout = trpc.auth.login.useMutation();

  const handleLogin = () => {
    login.mutate();
  };

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
