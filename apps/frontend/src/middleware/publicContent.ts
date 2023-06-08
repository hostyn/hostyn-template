import { ironSessionOptions } from "iron-session-config";
import { withIronSessionSsr } from "iron-session/next";
import { useServerSideHelper } from "@hooks/useServerSideHelper";
import { type GetServerSideProps } from "next";

export default function protectedContent(
  getServerSideProps?: GetServerSideProps
) {
  return withIronSessionSsr(async (ctx) => {
    const helper = useServerSideHelper(ctx);

    await helper.auth.getSession.prefetch();

    if (getServerSideProps == null) {
      return { props: { trpcState: helper.dehydrate() } };
    }

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
