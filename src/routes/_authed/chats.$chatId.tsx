import {
  ErrorComponent,
  createFileRoute,
  notFound,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Chat } from "~/components/Chat";
import { NotFound } from "~/components/NotFound.js";
import { fetchChat, fetchMessages } from "~/functions/chats.js";
import { convertToUIMessages } from "~/lib/utils";

export const Route = createFileRoute("/_authed/chats/$chatId")({
  loader: async ({ params: { chatId } }) => {
    const chat = await fetchChat({ data: { id: chatId } });

    if (!chat) {
      throw notFound();
    }

    const messages = await fetchMessages({ data: { id: chat.id } });

    if (!messages) {
      throw notFound();
    }

    return {
      chat,
      messages,
    };
  },
  errorComponent: PostErrorComponent,
  component: PostComponent,
  notFoundComponent: () => {
    return <NotFound>Chat not found</NotFound>;
  },
});

function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const { chat, messages } = Route.useLoaderData();

  return (
    <>
      <Chat
        id={chat.id}
        initialMessages={convertToUIMessages(messages)}
        isReadonly={false}
      />
    </>
  );
}
