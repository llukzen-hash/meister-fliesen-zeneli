import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../data";

export default defineTool({
  name: "get_contact",
  title: "Kontaktmöglichkeiten",
  description:
    "Gibt die Kontaktwege für eine Anfrage zurück: Telefon, E-Mail, Adresse, Öffnungszeiten und Hinweis zur Vor-Ort-Beratung.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      phone: company.phone,
      email: company.email,
      address: company.address,
      openingHours: company.openingHours,
      website: company.website,
      note: "Beratung vor Ort auf der Baustelle ist möglich. Kostenvoranschlag unverbindlich und kostenlos.",
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(contact, null, 2) }],
      structuredContent: { contact },
    };
  },
});
