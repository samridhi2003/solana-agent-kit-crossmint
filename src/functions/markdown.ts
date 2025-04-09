import { createServerFn } from "@tanstack/react-start";
import { readFileSync } from "node:fs";
import path from "node:path";

export const readMarkdownFile = createServerFn({ method: "GET" })
  .validator((data: { filePath: string }) => data)
  .handler(({ data }) => {
    const resolvedPath = path.resolve(
      process.cwd(),
      "src",
      "markdown",
      data.filePath,
    );
    const fileContent = readFileSync(resolvedPath, { encoding: "utf-8" });
    return fileContent;
  });
