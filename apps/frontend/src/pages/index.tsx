import useAuth from "hooks/useAuth";

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <h1>{JSON.stringify(user)}</h1>
    </>
  );
}
