import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "Hello from TRPC!";
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
