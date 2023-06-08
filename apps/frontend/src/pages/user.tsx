import useAuth from "@hooks/useAuth";
import { protectedContent } from "@middleware/protectedContent";

export default function User() {
  const { user } = useAuth();

  return <h1>{JSON.stringify(user)}</h1>;
}

export const getServerSideProps = protectedContent;
