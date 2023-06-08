import "iron-session";
import type { IronSessionOptions } from "iron-session";

export const ironSessionOptions: IronSessionOptions = {
  cookieName: process.env.COOKIE_NAME as string,
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: 0,
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: string;
      email: string;
    };
  }
}
