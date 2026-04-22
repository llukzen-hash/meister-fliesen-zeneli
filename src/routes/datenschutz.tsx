import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Meister Fliesen Zeneli" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von Meister Fliesen Zeneli." },
      { property: "og:title", content: "Datenschutzerklärung – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Datenschutz auf einen Blick und ausführliche Hinweise zur Datenverarbeitung." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
          <SectionHeading
            eyebrow="Rechtliches"
            title={<>Datenschutz<span className="text-primary">erklärung</span></>}
            description="Datenschutz auf einen Blick – allgemeine Hinweise zur Verarbeitung Ihrer Daten."
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-10 px-6 py-20 text-sm leading-relaxed text-foreground/90">
        <Block title="Allgemeine Hinweise">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie den unten
            aufgeführten Abschnitten dieser Datenschutzerklärung.
          </p>
        </Block>

        <Block title="Datenerfassung auf dieser Website">
          <h3 className="mt-2 font-display text-base text-foreground">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten finden Sie im Abschnitt „Hinweis zur verantwortlichen Stelle“
            sowie in unserem <a href="/impressum" className="text-primary hover:underline">Impressum</a>.
          </p>

          <h3 className="mt-5 font-display text-base text-foreground">Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen
            (z. B. durch ein Kontaktformular). Andere Daten werden automatisch oder nach Ihrer
            Einwilligung beim Besuch der Website durch IT-Systeme erfasst (z. B. Browser,
            Betriebssystem, Uhrzeit des Seitenaufrufs).
          </p>

          <h3 className="mt-5 font-display text-base text-foreground">Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um die Website fehlerfrei bereitzustellen. Andere
            Daten dienen der Analyse des Nutzerverhaltens oder – bei Verträgen und Anfragen –
            zur Verarbeitung Ihrer Anliegen.
          </p>

          <h3 className="mt-5 font-display text-base text-foreground">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h3>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
            Verarbeitung Ihrer Daten. Zudem können Sie erteilte Einwilligungen jederzeit
            widerrufen und sich bei der zuständigen Aufsichtsbehörde beschweren.
          </p>
        </Block>

        <Block title="Hinweis zur verantwortlichen Stelle">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Fatlind Zeneli – Fliesenlegermeister<br />
            Spannhagengarten 12b<br />
            30655 Hannover<br />
            Telefon: <a href="tel:+4915563570648" className="text-primary hover:underline">+49 (0) 155 63570648</a><br />
            E-Mail: <a href="mailto:info@meisterfliesenzeneli.de" className="text-primary hover:underline">info@meisterfliesenzeneli.de</a>
          </p>
        </Block>

        <Block title="Kontaktformular und E-Mail-Anfragen">
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
            Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
            geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </Block>

        <Block title="Ihre Rechte">
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
            ein Recht auf Berichtigung oder Löschung dieser Daten sowie ein Beschwerderecht bei
            der zuständigen Aufsichtsbehörde.
          </p>
        </Block>

        <p className="text-xs text-muted-foreground">
          Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
        </p>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-primary">{title}</h2>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}
