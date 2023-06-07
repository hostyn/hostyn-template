import { z } from "zod";
import { protectedProcedure, publicProcedure } from "../procedures";
import { createTRPCRouter } from "../trpc";
import { prisma } from "prisma";
import bcrypt from "bcryptjs";

export const authRouter = createTRPCRouter({
  login: publicProcedure.mutation(async ({ ctx }) => {
    ctx.session.user = {
      email: "test@test.com",
      id: "123",
    };
    await ctx.session.save();
    return { success: true };
  }),

  register: publicProcedure
    .input(
      z.object({
        email: z
          .string()
          .email()
          .refine(async (email) => {
            const count = await prisma.user.count({ where: { email: email } });
            return count === 0;
          }, "email-already-registered"),
        password: z
          .string()
          .min(8, "password-too-short")
          .max(256, "password-too-long"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(input.password, salt);

      const user = await ctx.prisma.user.create({
        data: { email: input.email, password: encryptedPassword },
      });

      ctx.session.user = {
        id: user.id,
        email: user.email,
      };
      await ctx.session.save();

      return ctx.session.user;
    }),

  logout: publicProcedure.mutation(({ ctx }) => {
    ctx.session.destroy();
    return { success: true };
  }),

  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session.user ?? null;
  }),
});
