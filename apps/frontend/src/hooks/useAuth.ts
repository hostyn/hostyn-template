import { trpc } from "@services/trpc";

export default function useAuth() {
  const trpcContext = trpc.useContext();

  const { data: user } = trpc.auth.getSession.useQuery();

  const useLogin = trpc.auth.login.useMutation({
    onSuccess: () => trpcContext.auth.invalidate(),
  });

  const useLogout = trpc.auth.logout.useMutation({
    onSuccess: () => trpcContext.auth.invalidate(),
  });

  const login = () => useLogin.mutate();
  const logout = () => useLogout.mutate();

  return { user, login, logout };
}
