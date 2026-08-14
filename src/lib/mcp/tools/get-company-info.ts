import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../data";

export default defineTool({
  name: "get_company_info",
  title: "Betriebsinformationen",
  description:
    "Öffentliche Informationen zum Fliesenleger-Meisterbetrieb Meister Fliesen Zeneli: Inhaber, Anschrift, Telefon, E-Mail, Öffnungszeiten, Einsatzgebiet und Bewertungen.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(company, null, 2) }],
    structuredContent: { company },
  }),
});
