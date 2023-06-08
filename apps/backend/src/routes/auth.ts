import { z } from "zod";
import { publicProcedure } from "../procedures";
import { createTRPCRouter } from "../trpc";
import { prisma } from "prisma";
import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().min(1, "email-required").email(),
        password: z.string().min(1, "password-required"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (user == null) {
        throw new TRPCError({ code: "FORBIDDEN", message: "wrong-email" });
      }

      if (!bcrypt.compareSync(input.password, user.password)) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "wrong-password" });
      }

      ctx.session.user = {
        email: user.email,
        id: user.id,
      };

      await ctx.session.save();
      return ctx.session.user;
    }),

  register: publicProcedure
    .input(
      z.object({
        email: z
          .string()
          .min(1, "email-required")
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
