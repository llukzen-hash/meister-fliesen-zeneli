import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Hammer, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Meister Fliesen Zeneli Hannover" },
      { name: "description", content: "Meisterbetrieb für Fliesenarbeiten in Hannover. Lernen Sie uns kennen: Werte, Anspruch und Handwerk." },
      { property: "og:title", content: "Über uns – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Meisterbetrieb mit Anspruch: Werte, Handwerk und Verlässlichkeit." },
    ],
  }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="Über uns"
              title={<>Handwerk ist <span className="text-primary">Vertrauenssache.</span></>}
              description="Meister Fliesen Zeneli ist ein inhabergeführter Meisterbetrieb in Hannover. Wir leben Qualität, Pünktlichkeit und ehrliche Kommunikation – Eigenschaften, die unsere Kundinnen und Kunden seit Jahren schätzen."
            />
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <p className="font-display text-6xl text-primary">5,0</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">Google Bewertung</p>
              <div className="my-6 h-px bg-border" />
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><span className="text-foreground">Standort:</span> Hannover, Spannhagengarten 12b</li>
                <li><span className="text-foreground">Einsatzgebiet:</span> Hannover & Umland</li>
                <li><span className="text-foreground">Status:</span> Meisterbetrieb</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { i: Award, t: "Meisterqualität", d: "Jede Fliese sitzt exakt. Jede Fuge ist sauber. Wir geben uns nur mit dem Ergebnis zufrieden, das wir auch in unserem eigenen Zuhause haben wollen." },
            { i: Heart, t: "Mit Freude bei der Arbeit", d: "Unsere Kunden bemerken es: Wir lieben unser Handwerk. Das spürt man in jedem Detail – und im Umgang miteinander." },
            { i: Hammer, t: "Lösungsorientiert", d: "Wenn etwas Unvorhergesehenes auftritt, suchen wir nicht das Problem, sondern die beste Lösung – und sprechen sie mit Ihnen ab." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Unser Versprechen</span>
            <h2 className="mt-4 text-4xl">Wir sagen, was wir tun. Und tun, was wir sagen.</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Bei uns gibt es keine bösen Überraschungen. Der Kostenvoranschlag, den Sie
              bekommen, ist der Preis, den Sie zahlen. Der Termin, den wir vereinbaren,
              ist der Termin, an dem wir vor der Tür stehen.
            </p>
            <p>
              Und sollte uns während der Arbeit etwas auffallen, das anders besser wäre,
              halten wir Rücksprache – bevor wir weitermachen.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
              Lernen Sie uns kennen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
