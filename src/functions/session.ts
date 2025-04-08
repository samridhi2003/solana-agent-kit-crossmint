import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "~/utils/session";

export const fetchSession = createServerFn({ method: "GET" }).handler(
  async () => (await useAppSession()).data,
);
