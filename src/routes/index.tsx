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
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Meisterbetrieb in Hannover · Qualität die bleibt
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
                <span className="font-medium text-foreground">5,0</span> · 7 Bewertungen auf Google
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
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="border-t border-border p-6">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Referenz · Hannover
                </p>
                <p className="mt-2 font-display text-xl">Komplettsanierung Badezimmer</p>
                <p className="mt-1 text-sm text-muted-foreground">Marmoroptik 60×120 cm · Holzoptik-Boden · Walk-in</p>
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

      {/* PROJEKTE GALERIE */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Referenzen"
              title={<>Ausgewählte Projekte</>}
              description="Ein Blick auf einige unserer abgeschlossenen Arbeiten."
            />
            <Link to="/referenzen" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
              Alle Projekte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: projektBad, t: "Komplettsanierung Bad", c: "Hannover · Marmoroptik & Holzboden" },
              { img: projektBoden, t: "Bad mit Anthrazit-Boden", c: "Hannover · Feinsteinzeug & Wandfliesen" },
              { img: projektKueche, t: "Walk-in-Dusche Betonoptik", c: "Hannover · Großformat" },
            ].map((p) => (
              <Link
                key={p.t}
                to="/referenzen"
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.t}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg">{p.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.c}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Stimmen unserer Kunden"
            title={<span className="text-accent-foreground">Empfohlen von allen,<br/>die uns beauftragt haben.</span>}
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary p-12 shadow-[var(--shadow-elegant)] md:p-20">
          <div className="absolute inset-0 -z-0 bg-[var(--gradient-warm)] opacity-90" />
          <div className="absolute inset-0 -z-0 text-white/15">
            <TilePattern className="h-full w-full" />
          </div>
          <div className="absolute -right-24 -top-24 -z-0 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 -z-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                Kostenlos & unverbindlich
              </span>
              <h2 className="mt-6 text-4xl text-primary-foreground md:text-6xl">
                Bereit für Ihr Projekt?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                Wir kommen vorbei, schauen es uns an und machen Ihnen ein faires Angebot.
                Unverbindlich und kostenlos.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link to="/kontakt" className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-background px-6 py-4 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 md:w-auto">
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+4915563570648" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-4 text-sm font-medium text-primary-foreground hover:bg-white/10 md:w-auto">
                <Phone className="h-4 w-4" /> 0155 63570648
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
