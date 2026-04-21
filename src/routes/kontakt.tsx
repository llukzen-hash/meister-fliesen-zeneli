import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Globe, Clock, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Meister Fliesen Zeneli Hannover" },
      { name: "description", content: "Kontaktieren Sie Meister Fliesen Zeneli in Hannover. Telefon: 0155 63570648. Spannhagengarten 12b, 30655 Hannover." },
      { property: "og:title", content: "Kontakt – Meister Fliesen Zeneli" },
      { property: "og:description", content: "Direkt erreichbar in Hannover – schnelle Antwort, ehrliche Beratung." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="border-b border-border bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeading
            eyebrow="Kontakt"
            title={<>Lassen Sie uns <span className="text-primary">sprechen.</span></>}
            description="Rufen Sie an, schreiben Sie eine Nachricht – oder kommen Sie auf einen Kaffee vorbei. Wir freuen uns auf Ihr Projekt."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          {[
            { i: Phone, label: "Telefon", value: "0155 63570648", href: "tel:+4915563570648" },
            { i: Mail, label: "Web", value: "meisterfliesenzeneli.de", href: "https://meisterfliesenzeneli.de" },
            { i: MapPin, label: "Adresse", value: "Spannhagengarten 12b\n30655 Hannover" },
            { i: Clock, label: "Öffnungszeiten", value: "Mo – Fr · bis 18:00 Uhr" },
            { i: Globe, label: "Plus Code", value: "CQ2H+6Q Hannover" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all ${c.href ? "hover:-translate-y-0.5 hover:border-primary/40" : ""}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                <c.i className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{c.label}</p>
                <p className="mt-1 whitespace-pre-line font-display text-lg">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form
          className="md:col-span-3 space-y-5 rounded-3xl border border-border bg-card p-8 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Anfrage von ${data.get("name")}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nTelefon: ${data.get("phone")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:info@meisterfliesenzeneli.de?subject=${subject}&body=${body}`;
          }}
        >
          <h3 className="text-2xl">Anfrage senden</h3>
          <p className="text-sm text-muted-foreground">Wir melden uns in der Regel innerhalb eines Werktags zurück.</p>

          <div className="grid gap-5 md:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="phone" label="Telefon" type="tel" />
          </div>
          <Field name="email" label="E-Mail" type="email" required />
          <div>
            <label className="mb-2 block text-sm font-medium">Ihre Nachricht</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Erzählen Sie uns kurz von Ihrem Projekt – Raum, Größe, Wünsche."
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 md:w-auto"
          >
            Anfrage absenden
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
