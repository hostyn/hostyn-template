import { ironSessionOptions } from "iron-session-config";
import { withIronSessionSsr } from "iron-session/next";
import { useServerSideHelper } from "@hooks/useServerSideHelper";
import { type GetServerSideProps } from "next";

export default function authPage(getServerSideProps: GetServerSideProps) {
  return withIronSessionSsr(async (ctx) => {
    const user = ctx.req.session.user;

    if (user != null) {
      return { redirect: { destination: "/", permanent: false } };
    }

    const helper = useServerSideHelper(ctx);

    await helper.auth.getSession.prefetch();

    const response = await getServerSideProps(ctx);

    return {
      ...response,
      props: {
        ...response["props"],
        trpcState: helper.dehydrate(),
      },
    };
  }, ironSessionOptions);
}
