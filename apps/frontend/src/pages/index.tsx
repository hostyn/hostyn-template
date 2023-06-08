import useAuth from "hooks/useAuth";

export default function Home() {
  const { user, login, register, logout } = useAuth();

  const handleRegister = () => {
    register("test@asdf.com", "asdfasdf");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => login("test@asdf.com", "asdfasdf")}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={handleRegister}>Register</button>
      <h1>{JSON.stringify(user)}</h1>
    </>
  );
}
