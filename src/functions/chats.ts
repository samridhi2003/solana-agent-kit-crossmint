import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { deleteChatById, getChatById, getChatsByUserId } from "db/queries";
import { useAppSession } from "../utils/session";
import { tryAsync } from "try.rs";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export const fetchChat = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const chat = await getChatById({ id: data.id });
    const userId = (await useAppSession()).data.id;

    if (!chat) {
      console.info(`Chat with id ${data.id} not found`);
      throw notFound();
    }

    if (chat.userId !== userId) {
      console.info(`Unauthorized access to chat with id ${data.id}`);
      throw notFound();
    }

    return chat;
  });

export const fetchChats = createServerFn({ method: "GET" })
  .validator(
    (data: {
      limit: number;
      startingAfter: string | null;
      endingBefore: string | null;
    }) => data,
  )
  .handler(async ({ data }) => {
    const userId = (await useAppSession()).data.id;

    if (!userId) {
      console.info("User not authenticated");
      throw notFound();
    }

    const chats = await getChatsByUserId({
      id: userId,
      limit: data.limit,
      endingBefore: data.endingBefore,
      startingAfter: data.startingAfter,
    });
    console.info("Fetching chats...");
    return chats;
  });
