import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound.js";
import { fetchChat } from "~/functions/chats.js";

export const Route = createFileRoute("/_authed/chats/$chatId")({
  loader: ({ params: { chatId } }) => fetchChat({ data: { id: chatId } }),
  errorComponent: PostErrorComponent,
  component: PostComponent,
  notFoundComponent: () => {
    return <NotFound>Chat not found</NotFound>;
  },
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const chat = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{chat.title}</h4>
      <div className="text-sm">{chat.title}</div>
    </div>
  );
}
