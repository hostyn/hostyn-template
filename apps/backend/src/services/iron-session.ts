import type { IronSessionOptions } from "iron-session";

export const ironSessionOptions: IronSessionOptions = {
  cookieName: process.env.COOKIE_NAME,
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: 0,
};
