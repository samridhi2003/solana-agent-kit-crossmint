import { createFileRoute, redirect } from "@tanstack/react-router";
import { fetchSession } from "~/functions/session";

export const Route = createFileRoute("/_authed")({
  beforeLoad: async () => {
    const session = await fetchSession();

    if (!session?.email && !session?.walletAddress) {
      // throw redirect({ href: "/" });
      return { isLoggedIn: false };
    }

    return { isLoggedIn: true };
  },
  loader: async ({ context }) => {
    if (!context.isLoggedIn) {
      // Tanstack Start loader functions are run on both the server and the client unless
      // explicitly told not to or if they have server functions in them.
      // That's why this is possible.
      if (typeof window !== "undefined") {
        window.location.href = "/";
        // show window dialog
        window.alert("Please connect to Privy before accessing chats");
      }
      throw redirect({ href: "/" });
    }
  },
});
