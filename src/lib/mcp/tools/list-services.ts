import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "Leistungen auflisten",
  description:
    "Listet die angebotenen Fliesenleger-Leistungen (Bad- & Wandfliesen, Bodenbeläge, Reparatur & Sanierung, Beratung & Planung) mit Beschreibung und Leistungspunkten.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optionaler Suchbegriff, filtert Leistungen nach Titel, Beschreibung oder Punkten."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? services.filter((s) =>
          [s.title, s.description, ...s.points].join(" ").toLowerCase().includes(q),
        )
      : services;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
