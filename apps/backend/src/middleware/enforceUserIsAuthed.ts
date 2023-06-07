import { TRPCError } from "@trpc/server";
import { createTRPCMiddleware } from "../trpc";

export const enforceUserIsAuthenticated = createTRPCMiddleware(
  ({ ctx, next }) => {
    if (ctx.session.user == null) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next();
  }
);
