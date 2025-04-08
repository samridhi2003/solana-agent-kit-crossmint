import { CircleUser, Contact } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import type { User } from "db/schema";
import { Link, useNavigate } from "@tanstack/react-router";
import { usePrivy } from "@privy-io/react-auth";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "./Toast";

export default function UserLoginButton(props: { user: User | null }) {
  const { logout, authenticated, user, login } = usePrivy();
  const [_, copyToClipboard] = useCopyToClipboard();
  const nav = useNavigate();

  return (
    <>
      {props.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleUser />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>{props.user.email}</DropdownMenuItem>
            {authenticated ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Privy Account</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem
                    onClick={() => {
                      if (user?.wallet?.address) {
                        copyToClipboard(user?.wallet?.address);
                        toast({
                          type: "success",
                          description: `Copied ${user?.wallet?.address} to clipboard`,
                        });
                      } else
                        toast({
                          type: "error",
                          description: "No wallet address found",
                        });
                    }}
                  >
                    Copy Address
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={logout}>
                    Disconnect Privy
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem onClick={login}>Connect Privy</DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => nav({ href: "/logout" })}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
}
