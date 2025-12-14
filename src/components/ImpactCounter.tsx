import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-primary md:text-5xl">
        +{count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">{label}</p>
    </div>
  );
}

export function ImpactCounter() {
  return (
    <section className="border-y border-border bg-gradient-warm py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <Counter end={150} label="Familias apoyadas" />
          <Counter end={25} label="Proyectos activos" />
          <Counter end={5000} label="Hectáreas protegidas" />
          <Counter end={12} label="Comunidades" />
        </div>
      </div>
    </section>
  );
}
