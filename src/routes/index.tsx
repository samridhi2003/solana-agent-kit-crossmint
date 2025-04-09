import { createFileRoute } from "@tanstack/react-router";
import { Markdown } from "~/components/Markdown";
import { readMarkdownFile } from "~/functions/markdown";

export const Route = createFileRoute("/")({
  loader: async () => {
    return readMarkdownFile({ data: { filePath: "home.md" } });
  },
  component: Home,
});

function Home() {
  const markdown = Route.useLoaderData();

  return (
    <div className="p-2">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
