import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import projektBad from "@/assets/projekt-bad.jpg";
import projektBoden from "@/assets/projekt-boden.jpg";
import projektKueche from "@/assets/projekt-kueche.jpg";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen & Projekte – Meister Fliesen Zeneli" },
      { name: "description", content: "Eine Auswahl abgeschlossener Fliesenprojekte aus Hannover und Umgebung." },
      { property: "og:title", content: "Referenzen – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Abgeschlossene Bad-, Boden- und Wandprojekte." },
      { property: "og:image", content: projektBad },
    ],
  }),
  component: ReferenzenPage,
});

const projects = [
  {
    image: projektBad,
    title: "Komplettsanierung Badezimmer",
    location: "Hannover-List",
    category: "Bad & Wand",
    description: "Bodengleiche Walk-in-Dusche mit großformatigen Wandfliesen in warmem Sandton. Inklusive Abdichtung, Verlegung und Silikonarbeiten.",
    specs: ["Großformat 60×120 cm", "Bodengleiche Dusche", "8 m² Wandfläche"],
  },
  {
    image: projektBoden,
    title: "Wohnbereich in Steinoptik",
    location: "Hannover-Mitte",
    category: "Bodenbelag",
    description: "Großformat-Feinsteinzeug in heller Steinoptik. Fugenoptimierte Verlegung über den gesamten offenen Wohnbereich.",
    specs: ["Feinsteinzeug", "60×120 cm", "ca. 45 m²"],
  },
  {
    image: projektKueche,
    title: "Küchenrückwand Metro-Optik",
    location: "Langenhagen",
    category: "Wandfliesen",
    description: "Klassische Metro-Fliesen in soft Blue-Grey als zeitlose Küchenrückwand. Präzise Eckschnitte und saubere Fugenarbeit.",
    specs: ["Metro 7,5×30 cm", "Versatzverband", "Glanz-Glasur"],
  },
];

const reviews = [
  {
    name: "Catharina Avenriep",
    when: "vor 2 Monaten",
    text: "Top Firma – kann ich absolut empfehlen. Von ausführlicher Vorab-Beratung bis zum Kostenvoranschlag und Umsetzung. Super akkurat und schnell erledigt.",
  },
  {
    name: "Leander",
    when: "vor 2 Monaten",
    text: "Pünktlich da, freundliche Kommunikation und schöne Arbeit. Haben bei Reparaturarbeiten auf die Details geachtet. Gerne wieder!",
  },
  {
    name: "K. Nettler",
    when: "vor 6 Monaten",
    text: "Sehr empfehlenswert, mit Freude bei der Arbeit, freundlich, termintreu, kompetent, ausführliche Beratung, handwerklich perfekt.",
  },
];

function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <SectionHeading
            eyebrow="Referenzen"
            title={<>Abgeschlossene Projekte. <span className="text-primary">Sauber umgesetzt.</span></>}
            description="Eine Auswahl unserer Arbeiten aus Hannover und Umgebung – von der Badsanierung bis zum großformatigen Bodenbelag."
          />
          <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <p className="font-display text-2xl leading-none">5,0</p>
              <p className="text-xs text-muted-foreground">aus 6 Google-Bewertungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTE */}
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24">
        {projects.map((p, idx) => (
          <article
            key={p.title}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{p.category}</span>
              <h2 className="mt-3 text-3xl md:text-4xl">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.specs.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* KUNDENSTIMMEN */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading eyebrow="Kundenstimmen" title="Was unsere Kunden sagen" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">„{r.text}"</blockquote>
                <figcaption className="mt-5 text-xs text-muted-foreground">— {r.name} · {r.when}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-secondary/40 p-10 text-center md:p-14">
          <h3 className="text-3xl md:text-4xl">Werden Sie unsere nächste Referenz.</h3>
          <p className="mt-3 text-muted-foreground">Lassen Sie uns gemeinsam Ihr Projekt umsetzen.</p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90">
            Projekt anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
