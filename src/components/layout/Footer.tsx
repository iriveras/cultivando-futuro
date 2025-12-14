import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-aportecampo.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Aportecampo" className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sembramos esperanza, cultivamos futuro. Apoyamos al pequeño productor campesino y cuidamos la tierra que nos da vida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/quienes-somos", label: "Quiénes Somos" },
                { href: "/proyectos", label: "Proyectos" },
                { href: "/donaciones", label: "Donaciones" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>contacto@aportecampo.org</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Message */}
          <div className="rounded-xl bg-gradient-warm p-6">
            <p className="text-sm italic text-foreground/80 leading-relaxed">
              "El campo no se abandona, se fortalece. Cada semilla sembrada hoy es alimento para mañana."
            </p>
            <div className="mt-4 flex items-center gap-2 text-primary">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Gracias por tu apoyo</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aportecampo. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con <Heart className="inline h-3 w-3 text-secondary fill-secondary" /> para el campo colombiano
          </p>
        </div>
      </div>
    </footer>
  );
}
