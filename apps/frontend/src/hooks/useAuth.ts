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

  const useRegister = trpc.auth.register.useMutation({
    onSuccess: () => trpcContext.auth.invalidate(),
  });

  const login = (email: string, password: string) =>
    useLogin.mutate({ email, password });

  const register = (email: string, password: string) =>
    useRegister.mutate({ email, password });

  const logout = () => useLogout.mutate();

  return { user, login, register, logout };
}
