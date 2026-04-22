import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Meister Fliesen Zeneli" },
      { name: "description", content: "Impressum und rechtliche Angaben von Meister Fliesen Zeneli, Fliesenlegermeister in Hannover." },
      { property: "og:title", content: "Impressum – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Rechtliche Angaben gemäß § 5 TMG." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
          <SectionHeading
            eyebrow="Rechtliches"
            title={<>Impressum</>}
            description="Angaben gemäß § 5 TMG."
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-10 px-6 py-20 text-sm leading-relaxed text-foreground/90">
        <Block title="Anbieter">
          <p>
            Fatlind Zeneli – Fliesenlegermeister<br />
            Spannhagengarten 12b<br />
            30655 Hannover
          </p>
        </Block>

        <Block title="Kontakt">
          <p>
            Telefon: <a href="tel:+4915563570648" className="text-primary hover:underline">+49 (0) 155 63570648</a><br />
            E-Mail: <a href="mailto:info@meisterfliesenzeneli.de" className="text-primary hover:underline">info@meisterfliesenzeneli.de</a>
          </p>
        </Block>

        <Block title="Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE454117881
          </p>
        </Block>

        <Block title="Aufsichtsbehörde">
          <p>
            Handwerkskammer Hannover<br />
            Berliner Allee 17, 30175 Hannover<br />
            Telefon: <a href="tel:+4951134859 0" className="text-primary hover:underline">0511 34859-0</a><br />
            E-Mail: <a href="mailto:info@hwk-hannover.de" className="text-primary hover:underline">info@hwk-hannover.de</a><br />
            Web: <a href="http://www.hwk-hannover.de" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.hwk-hannover.de</a>
          </p>
        </Block>

        <Block title="Berufsbezeichnung und berufsrechtliche Regelungen">
          <p>
            Berufsbezeichnung: Fliesenlegermeister<br />
            Zuständige Kammer: Handwerkskammer Hannover, Berliner Allee 17, 30175 Hannover<br />
            Verliehen in: Deutschland
          </p>
          <p className="mt-3">
            Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO),<br />
            einsehbar unter:{" "}
            <a
              href="https://www.gesetze-im-internet.de/hwo/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              gesetze-im-internet.de/hwo
            </a>
          </p>
        </Block>

        <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Block>

        <p className="text-xs text-muted-foreground">
          Quelle: e-recht24.de
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
