import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter, createTRPCContext } from "backend";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
