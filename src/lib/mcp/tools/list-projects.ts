import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "Referenzprojekte auflisten",
  description:
    "Listet abgeschlossene Referenzprojekte (Bad, Boden, Dusche, Wand) mit Titel, Ort, Kategorie, Beschreibung und technischen Angaben.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optionaler Filter auf die Projektkategorie, z. B. 'Bad', 'Dusche', 'Bodenbelag'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const c = category?.trim().toLowerCase();
    const items = c
      ? projects.filter((p) => p.category.toLowerCase().includes(c))
      : projects;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
