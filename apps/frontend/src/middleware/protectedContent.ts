import { ironSessionOptions } from "iron-session-config";
import { withIronSessionSsr } from "iron-session/next";

export const protectedContent = withIronSessionSsr(async ({ req }) => {
  const user = req.session.user;

  if (user == null) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}, ironSessionOptions);
