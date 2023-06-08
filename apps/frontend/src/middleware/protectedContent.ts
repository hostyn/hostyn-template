import { ironSessionOptions } from "iron-session-config";
import { withIronSessionSsr } from "iron-session/next";
import { useServerSideHelper } from "@hooks/useServerSideHelper";

export const protectedContent = withIronSessionSsr(async ({ req }) => {
  const user = req.session.user;

  if (user == null) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const helper = useServerSideHelper(req);

  await helper.auth.getSession.prefetch();

  return {
    props: {
      trpcState: helper.dehydrate(),
    },
  };
}, ironSessionOptions);
