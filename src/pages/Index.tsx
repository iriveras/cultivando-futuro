import { Link } from "react-router-dom";
import { Heart, Leaf, Droplets, Sprout, Users, Sun } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ImpactCounter } from "@/components/ImpactCounter";
import heroImage from "@/assets/hero-campo.jpg";

const featuredProjects = [
  {
    id: "ganaderia",
    title: "Ganadería Sostenible",
    description: "Apoyamos a pequeños ganaderos con técnicas sostenibles que mejoran la productividad y protegen el medio ambiente.",
    icon: <Sun className="h-6 w-6" />,
    color: "secondary" as const,
  },
  {
    id: "cultivos",
    title: "Cultivos Sustentables",
    description: "Programas de capacitación y apoyo para cultivos que respetan la tierra y generan ingresos dignos para las familias.",
    icon: <Sprout className="h-6 w-6" />,
    color: "leaf" as const,
  },
  {
    id: "agua",
    title: "Conservación del Agua",
    description: "Protegemos las fuentes hídricas y enseñamos técnicas de uso eficiente del agua en las comunidades rurales.",
    icon: <Droplets className="h-6 w-6" />,
    color: "water" as const,
  },
];

const hopeMessages = [
  "El campo no se abandona, se fortalece.",
  "Cada semilla sembrada hoy es alimento para mañana.",
  "Apoyar al campesino es honrar la tierra.",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Campo colombiano al atardecer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Sembramos esperanza,<br />
              <span className="text-secondary">cultivamos futuro</span>
            </h1>
            <p className="animate-fade-up-delay-1 mt-6 text-lg text-primary-foreground/90 md:text-xl">
              Apoyamos al pequeño productor campesino y cuidamos la tierra que nos da vida. 
              Tu aporte transforma comunidades rurales en toda Colombia.
            </p>
            <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donaciones">
                  <Heart className="h-5 w-5" />
                  Donar ahora
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/proyectos">
                  Conoce nuestros proyectos
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="h-14 w-8 rounded-full border-2 border-primary-foreground/30 p-1">
            <div className="h-3 w-full rounded-full bg-primary-foreground/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Hope Message */}
      <section className="bg-gradient-nature py-12 md:py-16">
        <div className="container text-center">
          <Leaf className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-4 font-display text-xl italic text-foreground/80 md:text-2xl">
            "Cada aporte es una semilla de esperanza para quienes trabajan la tierra con amor y esfuerzo."
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Proyectos <span className="text-primary">destacados</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Trabajamos en múltiples frentes para fortalecer el campo colombiano y mejorar la calidad de vida de nuestras comunidades rurales.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="nature" size="lg" asChild>
              <Link to="/proyectos">
                Ver todos los proyectos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <ImpactCounter />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="leaves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 Q15 5 10 10 Q5 5 10 0" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#leaves)" />
          </svg>
        </div>
        
        <div className="container relative z-10 text-center">
          <Heart className="mx-auto h-12 w-12 text-secondary animate-pulse" />
          <h2 className="mt-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Tu apoyo transforma vidas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Protege el medio ambiente y fortalece el campo colombiano. 
            Cada donación, sin importar el monto, marca una diferencia real en nuestras comunidades.
          </p>
          <Button variant="hero" size="xl" className="mt-10" asChild>
            <Link to="/donaciones">
              <Heart className="h-5 w-5" />
              Quiero aportar
            </Link>
          </Button>
        </div>
      </section>

      {/* Hope Messages */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center">
            <Users className="mx-auto h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Mensajes de Fe y Esperanza
            </h2>
          </div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hopeMessages.map((message, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-warm p-6 text-center shadow-soft"
              >
                <Leaf className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-4 font-display text-lg italic text-foreground/80">
                  "{message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
