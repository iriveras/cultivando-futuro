import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "primary" | "secondary" | "accent" | "leaf" | "water";
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/20 text-secondary-foreground",
  accent: "bg-accent/10 text-accent",
  leaf: "bg-leaf/10 text-leaf",
  water: "bg-water/10 text-water",
};

export function ProjectCard({ id, title, description, icon, color }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-hover hover:-translate-y-1">
      <CardHeader>
        <div
          className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
            colorClasses[color]
          )}
        >
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="group/btn p-0 h-auto text-primary" asChild>
          <Link to={`/proyectos#${id}`}>
            Conocer más
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
