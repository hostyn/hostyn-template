import { trpc } from "@services/trpc";

export default function Home() {
  const trpcContext = trpc.useContext();
  const login = trpc.auth.login.useMutation({
    onSuccess: () => trpcContext.auth.invalidate(),
  });
  const logout = trpc.auth.logout.useMutation({
    onSuccess: () => trpcContext.auth.invalidate(),
  });
  const { data: session } = trpc.auth.getSession.useQuery();

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
      <h1>{JSON.stringify(session)}</h1>
    </>
  );
}
