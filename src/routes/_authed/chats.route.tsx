import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { fetchChats } from "~/functions/chats.js";

export const Route = createFileRoute("/_authed/chats")({
  loader: () =>
    fetchChats({
      data: { limit: 20, endingBefore: null, startingAfter: null },
    }),
  component: PostsComponent,
});

function PostsComponent() {
  const chats = Route.useLoaderData();

  return (
    <SidebarProvider>
      <div className="p-2 flex gap-2">
        {/* <ul className="list-disc pl-4"> */}
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              {chats.chats.map((chat) => {
                return (
                  // <li key={chat.id} className="whitespace-nowrap">
                  <SidebarMenuItem
                    key={chat.id}
                    className="flex justify-between m-1 p-2 hover:bg-muted rounded-md cursor-pointer"
                  >
                    <Link
                      to="/chats/$chatId"
                      params={{
                        chatId: chat.id,
                      }}
                      className="block py-1"
                      activeProps={{ className: "font-bold" }}
                    >
                      <div>{chat.title.substring(0, 20)}</div>
                    </Link>
                    <Button
                      variant={"ghost"}
                      onClick={async () => {
                        toast.promise(
                          fetch(`/api/chat?id=${chat.id}`, {
                            method: "DELETE",
                          }),
                          {
                            loading: "Deleting chat...",
                            success: () => {
                              const path = window.location.pathname;

                              if (path.includes(chat.id)) {
                                window.location.href = "/chats";
                              } else {
                                window.location.reload();
                              }

                              return "Chat deleted";
                            },
                            error: (err) => {
                              console.error(err);
                              return `Failed to delete chat: ${err}`;
                            },
                          },
                        );
                      }}
                    >
                      <Trash />
                    </Button>
                  </SidebarMenuItem>
                  // </li>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        {/* </ul> */}
        <hr />
        <SidebarTrigger />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
