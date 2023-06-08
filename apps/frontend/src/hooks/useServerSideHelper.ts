import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "backend";
import { createInnerTRPCContext } from "backend/src/trpc";
import { GetServerSidePropsContext } from "next";
import SuperJSON from "superjson";

export const useServerSideHelper = (req: GetServerSidePropsContext["req"]) => {
  const context = createInnerTRPCContext({ session: req.session });

  const helper = createServerSideHelpers({
    router: appRouter,
    ctx: context,
    transformer: SuperJSON,
  });

  return helper;
};
