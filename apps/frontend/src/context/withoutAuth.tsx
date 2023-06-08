/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from "@hooks/useAuth";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withoutAuth(ChildComponent: NextPage): NextPage {
  const Page = () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (user != null) {
        router.replace("/");
      }
    }, [router, user]);

    return <ChildComponent />;
  };

  return Page;
}
