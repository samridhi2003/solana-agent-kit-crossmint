import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { useMutation } from "~/hooks/useMutation";
import { Auth } from "~/components/Auth";
import { useAppSession } from "~/utils/session";
import { createUser, getUser } from "db/queries";
import { compareSync } from "bcrypt-ts";

export const signupFn = createServerFn({ method: "POST" })
  .validator(
    (d: { email: string; password: string; redirectUrl?: string }) => d,
  )
  .handler(async ({ data }) => {
    // Check if the user already exists
    const found = (await getUser(data.email))[0];

    // Create a session
    const session = await useAppSession();

    if (found) {
      if (!compareSync(data.password, found.password)) {
        return {
          error: true,
          userExists: true,
          message: "User already exists",
        };
      }

      // Store the user's email in the session
      await session.update({
        email: found.email,
      });

      // Redirect to the prev page stored in the "redirect" search param
      throw redirect({
        href: data.redirectUrl || "/",
      });
    }

    // Create the user
    const user = await createUser(data.email, data.password, null);

    // Store the user's email in the session
    await session.update({
      email: data.email,
      id: user[0].id,
      walletId: user[0].walletId,
    });

    // Redirect to the prev page stored in the "redirect" search param
    throw redirect({
      href: data.redirectUrl || "/",
    });
  });

export const Route = createFileRoute("/signup")({
  component: SignupComp,
});

function SignupComp() {
  const signupMutation = useMutation({
    fn: useServerFn(signupFn),
  });

  return (
    <Auth
      actionText="Sign Up"
      status={signupMutation.status}
      onSubmit={(e) => {
        const formData = new FormData(e.target as HTMLFormElement);

        signupMutation.mutate({
          data: {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          },
        });
      }}
      afterSubmit={
        signupMutation.data?.error ? (
          <>
            <div className="text-red-400">{signupMutation.data.message}</div>
          </>
        ) : null
      }
    />
  );
}
