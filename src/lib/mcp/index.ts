import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listServices from "./tools/list-services";
import listProjects from "./tools/list-projects";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "meister-fliesen-zeneli",
  title: "Meister Fliesen Zeneli",
  version: "0.1.0",
  instructions:
    "Öffentliche Tools der Website des Fliesenleger-Meisterbetriebs Meister Fliesen Zeneli in Hannover. Nutze `get_company_info` für Betriebsdaten, `list_services` für Leistungen, `list_projects` für Referenzprojekte und `get_contact` für Kontaktwege.",
  tools: [getCompanyInfo, listServices, listProjects, getContact],
});
