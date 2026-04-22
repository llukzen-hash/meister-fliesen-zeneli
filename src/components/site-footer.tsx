import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Meister Fliesen Zeneli Logo" className="h-11 w-11 rounded-md object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg text-primary">Meister Fliesen Zeneli</span>
              <span className="font-display text-xs italic text-muted-foreground">Qualität die bleibt.</span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Ihr Fliesenlegermeister in Hannover und Umgebung. Präzise Handwerkskunst,
            ehrliche Beratung und ein Ergebnis, das bleibt.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium">Kontakt</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Spannhagengarten 12b<br/>30655 Hannover</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <a href="tel:+4915563570648" className="hover:text-foreground">0155 63570648</a></li>
            <li className="flex gap-2"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> meisterfliesenzeneli.de</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Mo–Fr · bis 18:00 Uhr</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-medium">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/leistungen" className="hover:text-foreground">Leistungen</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-foreground">Über uns</Link></li>
            <li><Link to="/referenzen" className="hover:text-foreground">Referenzen</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-foreground">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Meister Fliesen Zeneli. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-3">
            <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
            <span>·</span>
            <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
            <span>·</span>
            <p>Meisterbetrieb · Hannover</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
