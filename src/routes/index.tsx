import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, ShieldCheck, Clock, Sparkles, Phone } from "lucide-react";
import { TilePattern } from "@/components/tile-pattern";
import { SectionHeading } from "@/components/section-heading";
import projektBad from "@/assets/projekt-bad.jpg";
import projektBoden from "@/assets/projekt-boden.jpg";
import projektKueche from "@/assets/projekt-kueche.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meister Fliesen Zeneli – Fliesenleger Hannover" },
      { name: "description", content: "Meisterbetrieb für Fliesenarbeiten in Hannover. Bäder, Böden, Sanierung. 5,0★ auf Google." },
      { property: "og:title", content: "Meister Fliesen Zeneli – Fliesenleger Hannover" },
      { property: "og:description", content: "Meisterbetrieb für Fliesenarbeiten in Hannover. Bäder, Böden, Sanierung. 5,0★ auf Google." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 text-accent/30">
          <TilePattern className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-subtle)]" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Meisterbetrieb in Hannover
            </span>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              Fliesen, die <em className="not-italic text-primary">bleiben.</em>
              <br />
              Handwerk mit Anspruch.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Vom ersten Beratungsgespräch bis zur letzten Fuge: Wir verlegen Ihr Bad,
              Ihren Boden und Ihre Wand mit der Präzision, die ein Meisterbetrieb verspricht.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Kostenvoranschlag anfragen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+4915563570648"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-6 py-3.5 text-sm font-medium hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" /> 0155 63570648
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5,0</span> · 6 Bewertungen auf Google
              </p>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--gradient-warm)] opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={projektBad}
                alt="Modernes Badezimmer mit großformatigen Wandfliesen, Hannover"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="border-t border-border p-6">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Referenz · Hannover-List
                </p>
                <p className="mt-2 font-display text-xl">Komplettsanierung Badezimmer</p>
                <p className="mt-1 text-sm text-muted-foreground">Großformat 60×120 cm · bodengleiche Dusche</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Meisterqualität", text: "Geprüftes Handwerk mit Garantie auf jede Fuge." },
            { icon: Clock, title: "Termintreu", text: "Wir kommen pünktlich und halten den Zeitplan." },
            { icon: Sparkles, title: "Sauber gearbeitet", text: "Saubere Baustelle, ordentliche Übergabe." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4 bg-background p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeading
          eyebrow="Leistungen"
          title={<>Vom Bad bis zum Boden — <span className="text-primary">alles aus einer Hand.</span></>}
          description="Vier Kernbereiche, in denen wir seit Jahren überzeugen."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Bad- & Wandfliesen", d: "Komplette Badsanierung von der Planung bis zur Silikonfuge." },
            { t: "Bodenbeläge", d: "Großformat, Naturstein, Feinsteinzeug — präzise verlegt." },
            { t: "Reparatur & Sanierung", d: "Ausbesserungen, Fugen erneuern, schadhafte Fliesen tauschen." },
            { t: "Beratung & Planung", d: "Vor-Ort-Termin, ehrlicher Kostenvoranschlag, klare Empfehlungen." },
          ].map((s, i) => (
            <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
              <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 h-1 w-10 rounded-full bg-primary/30 transition-all group-hover:w-20 group-hover:bg-primary" />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Stimmen unserer Kunden"
            title={<span className="text-accent-foreground">5,0 von 5 Sternen.<br/>Sechsmal in Folge.</span>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { name: "Catharina Avenriep", text: "Top Firma — kann ich absolut empfehlen. Von ausführlicher Vorab-Beratung bis zum Kostenvoranschlag und Umsetzung. Super akkurat und schnell erledigt." },
              { name: "Leander", text: "Pünktlich da, freundliche Kommunikation und schöne Arbeit. Haben bei Reparaturarbeiten auf die Details geachtet. Gerne wieder!" },
              { name: "K. Nettler", text: "Sehr empfehlenswert, mit Freude bei der Arbeit, freundlich, termintreu, kompetent, ausführliche Beratung, handwerklich perfekt." },
            ].map((r) => (
              <figure key={r.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-snug">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-6 text-sm text-accent-foreground/70">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--gradient-warm)] p-12 md:p-20">
          <div className="absolute inset-0 -z-0 text-white/10">
            <TilePattern className="h-full w-full" />
          </div>
          <div className="relative max-w-2xl text-primary-foreground">
            <h2 className="text-4xl md:text-5xl">Bereit für Ihr Projekt?</h2>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Wir kommen vorbei, schauen es uns an und machen Ihnen ein faires Angebot.
              Unverbindlich und kostenlos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-background/90">
                Termin vereinbaren <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+4915563570648" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10">
                <Phone className="h-4 w-4" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
