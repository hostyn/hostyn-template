import { protectedProcedure, publicProcedure } from "../procedures";
import { createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure.mutation(({ ctx }) => {
    ctx.session.user = {
      email: "test@test.com",
      id: "123",
    };
    ctx.session.save();
    return { success: true };
  }),

  logout: publicProcedure.mutation(({ ctx }) => {
    ctx.session.destroy();
    return { success: true };
  }),

  getSession: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user;
  }),
});
