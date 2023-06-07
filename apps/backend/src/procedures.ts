import { enforceUserIsAuthenticated } from "./middleware/enforceUserIsAuthed";
import { trpc } from "./trpc";

export const publicProcedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(
  enforceUserIsAuthenticated
);
