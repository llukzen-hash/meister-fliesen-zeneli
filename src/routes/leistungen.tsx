import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Meister Fliesen Zeneli Hannover" },
      { name: "description", content: "Bad- und Wandfliesen, Bodenbeläge, Reparatur & Sanierung sowie Beratung & Planung in Hannover und Umgebung." },
      { property: "og:title", content: "Leistungen – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Bad, Boden, Sanierung, Beratung – alles aus einer Hand." },
    ],
  }),
  component: LeistungenPage,
});

const services = [
  {
    n: "01",
    t: "Bad- & Wandfliesen",
    d: "Von der kompletten Badsanierung bis zum stilvollen Akzent: Wir verlegen Wandfliesen aller Formate – auch bodengleiche Duschen, Nischen und Großformate.",
    points: ["Komplettsanierung Bad", "Bodengleiche Duschen", "Mosaik & Akzente", "Silikon- und Fugenpflege"],
  },
  {
    n: "02",
    t: "Bodenbeläge",
    d: "Naturstein, Feinsteinzeug oder Großformat – wir verlegen mit dem richtigen Verfahren für Ihr Material und Ihre Räume.",
    points: ["Großformat-Fliesen", "Naturstein & Feinsteinzeug", "Außenbereich & Terrasse", "Untergrund-Vorbereitung"],
  },
  {
    n: "03",
    t: "Reparatur & Sanierung",
    d: "Defekte Fliesen, alte Fugen oder kleine Schäden? Wir bringen alles fachgerecht wieder in Form. Bei nicht mehr erhältlichen Fliesen oder veränderten Brennchargen finden wir gemeinsam mit Ihnen die beste passende Lösung.",
    points: ["Einzelne Fliesen tauschen", "Fugen erneuern", "Silikon erneuern", "Wasserschaden-Sanierung"],
  },
  {
    n: "04",
    t: "Beratung & Planung",
    d: "Wir kommen vor Ort, hören zu und denken mit. Sie bekommen einen ehrlichen Kostenvoranschlag und konkrete Materialempfehlungen.",
    points: ["Vor-Ort-Termin", "Detaillierter Kostenvoranschlag", "Material- & Farbberatung", "Ablauf- und Zeitplanung"],
  },
];

function LeistungenPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeading
            eyebrow="Leistungen"
            title={<>Was wir für Sie <span className="text-primary">verlegen.</span></>}
            description="Vier Kernbereiche, in denen wir Tag für Tag liefern – mit dem Anspruch eines Meisterbetriebs."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 transition-all hover:border-primary/40">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                <span className="h-px flex-1 mx-4 bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Leistung</span>
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl">{s.t}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.d}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl">Ihr Projekt nicht dabei?</h3>
            <p className="mt-2 text-muted-foreground">Sprechen Sie uns an – wir finden eine Lösung.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
            Anfrage starten <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
