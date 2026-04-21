import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen & Bewertungen – Meister Fliesen Zeneli" },
      { name: "description", content: "Was unsere Kunden über uns sagen. 5,0 Sterne auf Google – echte Stimmen aus Hannover." },
      { property: "og:title", content: "Referenzen – Meister Fliesen Zeneli" },
      { property: "og:description", content: "5,0 Sterne auf Google. Lesen Sie echte Kundenstimmen." },
    ],
  }),
  component: ReferenzenPage,
});

const reviews = [
  {
    name: "Catharina Avenriep",
    when: "vor 2 Monaten",
    text: "Top Firma – kann ich absolut empfehlen. Von ausführlicher Vorab-Beratung bis zum Kostenvoranschlag und Umsetzung. Die Arbeiten wurden super akkurat und schnell erledigt, bei Bedarf wurde Rücksprache mit mir gehalten, um sich abzustimmen.",
    reply: "Vielen Dank für diese großartige Bewertung und das positive Feedback!",
  },
  {
    name: "Leander",
    when: "vor 2 Monaten",
    text: "Pünktlich da, freundliche Kommunikation und schöne Arbeit. Haben bei Reparaturarbeiten bei uns auf die Details geachtet für ein schöneres Ergebnis. Am Ende war alles wieder heile, sah gut aus und der Arbeitsplatz war sauber. Gerne wieder!",
    reply: "Vielen Dank für die tolle Bewertung und das Vertrauen! Es freut mich sehr, dass alles zu eurer Zufriedenheit umgesetzt wurde. Gerne wieder!",
  },
  {
    name: "K. Nettler",
    when: "vor 6 Monaten",
    text: "Sehr empfehlenswert, mit Freude bei der Arbeit, freundlich, termintreu, kompetent, ausführliche Beratung, handwerklich perfekt mit individuellen Lösungen bei unvorhersehbaren Problemen.",
    reply: "Vielen Dank für Ihre wunderbare Bewertung! Es freut mich sehr, dass Sie mit meiner Arbeit rundum zufrieden sind.",
  },
];

function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeading
            eyebrow="Referenzen"
            title={<>Echte Stimmen. <span className="text-primary">Echte Projekte.</span></>}
            description="Eine Bewertung sagt mehr als ein gutes Versprechen. Hier ist, was unsere Kundinnen und Kunden geteilt haben."
          />
          <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4">
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

      <section className="mx-auto max-w-5xl space-y-8 px-6 py-24">
        {reviews.map((r) => (
          <article key={r.name} className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-lg text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.when}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </header>
            <Quote className="mt-6 h-6 w-6 text-primary/40" />
            <p className="mt-3 text-lg leading-relaxed text-foreground/90">{r.text}</p>
            <div className="mt-6 rounded-xl border-l-2 border-primary bg-secondary/40 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Antwort vom Inhaber</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.reply}</p>
            </div>
          </article>
        ))}

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-10 text-center">
          <h3 className="text-2xl">Werden Sie unsere nächste Referenz.</h3>
          <p className="mt-2 text-muted-foreground">Lassen Sie uns gemeinsam Ihr Projekt umsetzen.</p>
          <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
            Projekt anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
