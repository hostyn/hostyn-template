import { TRPCError, initTRPC } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { IronSession, getIronSession } from "iron-session";
import superjson from "superjson";
import { ZodError } from "zod";
import { prisma } from "prisma";
import { ironSessionOptions } from "./services/iron-session";

type CreateContextOptions = {
  session: IronSession;
};

const createInnerTRPCContext = ({ session }: CreateContextOptions) => ({
  session,
  prisma,
});

export const createTRPCContext = async ({
  req,
  res,
}: CreateNextContextOptions) => {
  const session = await getIronSession(req, res, ironSessionOptions);

  return createInnerTRPCContext({ session }); //const { req, res } = opts;
};

export const trpc = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = trpc.router;
export const createTRPCMiddleware = trpc.middleware;
