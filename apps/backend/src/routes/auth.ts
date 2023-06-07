import { publicProcedure } from "../procedures";
import { createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure.mutation(async ({ ctx }) => {
    ctx.session.user = {
      email: "test@test.com",
      id: "123",
    };
    await ctx.session.save();
    return { success: true };
  }),

  logout: publicProcedure.mutation(({ ctx }) => {
    ctx.session.destroy();
    return { success: true };
  }),

  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session.user ?? null;
  }),
});
