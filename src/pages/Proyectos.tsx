import { Link } from "react-router-dom";
import { Heart, Sun, Sprout, Droplets, TreePine, GraduationCap, Leaf } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: "ganaderia",
    icon: <Sun className="h-8 w-8" />,
    title: "Apoyo a Pequeños Productores Ganaderos",
    description: "Fortalecemos a los pequeños ganaderos con técnicas de ganadería sostenible, mejorando la productividad mientras protegemos los ecosistemas locales.",
    objective: "Capacitar a 200 familias ganaderas en prácticas sostenibles para 2025.",
    impact: "Mejora en los ingresos familiares y reducción del impacto ambiental.",
    color: "bg-secondary/10 text-secondary-foreground",
    iconColor: "text-secondary",
  },
  {
    id: "cultivos",
    icon: <Sprout className="h-8 w-8" />,
    title: "Programas de Cultivos Sostenibles",
    description: "Enseñamos técnicas de agricultura regenerativa que respetan los ciclos naturales y mejoran la fertilidad del suelo para futuras generaciones.",
    objective: "Implementar cultivos sostenibles en 500 hectáreas.",
    impact: "Producción de alimentos más sanos y suelos más fértiles.",
    color: "bg-leaf/10 text-leaf-foreground",
    iconColor: "text-leaf",
  },
  {
    id: "agua",
    icon: <Droplets className="h-8 w-8" />,
    title: "Conservación y Protección del Agua",
    description: "Protegemos las fuentes hídricas y enseñamos técnicas de uso eficiente del agua, fundamentales para la vida rural y la agricultura.",
    objective: "Proteger 20 fuentes hídricas en comunidades rurales.",
    impact: "Acceso a agua limpia y conservación de ecosistemas acuáticos.",
    color: "bg-water/10 text-water-foreground",
    iconColor: "text-water",
  },
  {
    id: "reforestacion",
    icon: <TreePine className="h-8 w-8" />,
    title: "Reforestación y Plantación",
    description: "Sembramos árboles nativos para recuperar bosques, proteger la biodiversidad y combatir el cambio climático.",
    objective: "Plantar 10,000 árboles nativos en zonas deforestadas.",
    impact: "Recuperación de ecosistemas y captura de carbono.",
    color: "bg-primary/10 text-primary-foreground",
    iconColor: "text-primary",
  },
  {
    id: "educacion",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Educación y Orientación Tecnológica",
    description: "Capacitamos a productores en nuevas tecnologías y mejores prácticas agropecuarias para aumentar su competitividad.",
    objective: "Formar a 300 productores en tecnologías agropecuarias.",
    impact: "Mayor productividad y mejores oportunidades de mercado.",
    color: "bg-accent/10 text-accent-foreground",
    iconColor: "text-accent",
  },
];

export default function Proyectos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-nature py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Leaf className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Nuestros <span className="text-primary">Proyectos</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Cada proyecto representa nuestro compromiso con el campo colombiano y las familias que trabajan la tierra con dedicación.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                id={project.id}
                className="overflow-hidden hover:shadow-hover transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`${project.color} p-6 flex flex-col justify-center items-center md:items-start`}>
                    <div className={`${project.iconColor}`}>
                      {project.icon}
                    </div>
                    <CardTitle className="mt-4 text-center md:text-left">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardContent className="md:col-span-2 p-6">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-muted/50 p-4">
                        <h4 className="text-sm font-semibold text-primary">Objetivo</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{project.objective}</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-4">
                        <h4 className="text-sm font-semibold text-primary">Impacto Esperado</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                    </div>

                    <Button variant="hope" className="mt-6" asChild>
                      <Link to="/donaciones">
                        <Heart className="h-4 w-4" />
                        Apoyar este proyecto
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            ¿Quieres apoyar nuestros proyectos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Tu donación nos permite seguir trabajando por el campo colombiano y las familias que lo hacen grande.
          </p>
          <Button variant="hero" size="xl" className="mt-8" asChild>
            <Link to="/donaciones">
              <Heart className="h-5 w-5" />
              Hacer una donación
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
