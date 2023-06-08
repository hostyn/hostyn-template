import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "backend";
import { createInnerTRPCContext } from "backend/src/trpc";
import { GetServerSidePropsContext } from "next";
import SuperJSON from "superjson";

export const useServerSideHelper = (ctx: GetServerSidePropsContext) => {
  const context = createInnerTRPCContext({ session: ctx.req.session });

  const helper = createServerSideHelpers({
    router: appRouter,
    ctx: context,
    transformer: SuperJSON,
  });

  return helper;
};
