import { createFileRoute } from "@tanstack/react-router";
import { Markdown } from "~/components/Markdown";
import { readHomeMarkdownFile } from "~/functions/markdown";

export const Route = createFileRoute("/")({
  loader: async () => {
    return readHomeMarkdownFile();
  },
  component: Home,
});

function Home() {
  const markdown = Route.useLoaderData();

  return (
    <div className="p-4">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
