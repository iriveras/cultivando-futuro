import { Layout } from "@/components/layout/Layout";
import { Heart, Leaf, Target, Users, Shield, Sprout } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Compromiso",
    description: "Dedicación total a las comunidades rurales y sus necesidades.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sostenibilidad",
    description: "Prácticas que respetan y protegen el medio ambiente.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Comunidad",
    description: "Trabajo conjunto con las familias campesinas.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Transparencia",
    description: "Rendición de cuentas clara sobre cada aporte.",
  },
];

export default function QuienesSomos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-nature py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Sprout className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Quiénes <span className="text-primary">Somos</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Una asociación dedicada al fortalecimiento del campo colombiano y el bienestar de nuestras comunidades rurales.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Nuestra <span className="text-primary">Historia</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Aportecampo nació del amor profundo por nuestra tierra y la convicción de que el campo colombiano merece un futuro próspero y sostenible.
                </p>
                <p>
                  Somos una asociación dedicada a la orientación, capacitación y apoyo tecnológico del sector agropecuario, con el propósito de mejorar la productividad, el bienestar y la sostenibilidad de los pequeños productores campesinos.
                </p>
                <p>
                  Creemos en el poder transformador de la comunidad, en la protección del medio ambiente y en el trabajo conjunto para construir un futuro más justo y próspero para todos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-warm p-8 shadow-card">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-display text-2xl font-semibold">Nuestra Misión</h3>
                <p className="mt-3 text-muted-foreground">
                  Fortalecer al pequeño productor campesino a través de capacitación, apoyo tecnológico y recursos que mejoren su calidad de vida, mientras protegemos y preservamos nuestro medio ambiente para las generaciones futuras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Los principios que guían cada una de nuestras acciones y decisiones.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-card p-6 shadow-soft text-center transition-all hover:shadow-card hover:-translate-y-1"
              >
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Nuestro <span className="text-primary">Enfoque</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Apoyo a pequeños productores campesinos",
              "Ganadería sostenible y responsable",
              "Cultivos y agricultura regenerativa",
              "Conservación y protección del agua",
              "Reforestación y biodiversidad",
              "Educación y capacitación tecnológica",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-soft"
              >
                <Leaf className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <Heart className="mx-auto h-10 w-10 text-secondary" />
          <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl italic text-primary-foreground md:text-3xl">
            "El verdadero desarrollo viene de la tierra y de quienes la trabajan con amor y dedicación."
          </blockquote>
          <p className="mt-4 text-primary-foreground/70">— Aportecampo</p>
        </div>
      </section>
    </Layout>
  );
}
