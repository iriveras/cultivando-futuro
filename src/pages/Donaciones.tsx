import { useState } from "react";
import { Heart, CheckCircle, Leaf, Shield, Users, CreditCard, Building2, Copy, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const donationAmounts = [50000, 100000, 200000, 500000];

const benefits = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "100% Transparente",
    description: "Cada peso se destina directamente a nuestros proyectos.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Impacto Real",
    description: "Tu donación beneficia a familias campesinas.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sostenibilidad",
    description: "Apoyamos proyectos de largo plazo.",
  },
];

export default function Donaciones() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setCustomAmount(numericValue);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseInt(customAmount);
    return 0;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = getFinalAmount();
    if (amount < 10000) {
      toast({
        title: "Monto mínimo",
        description: "El monto mínimo de donación es de $10,000 COP",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y correo electrónico.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
    
    toast({
      title: "¡Gracias por tu generosidad!",
      description: "Tu intención de donación ha sido registrada. Nos pondremos en contacto contigo.",
    });
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="mt-6 font-display text-3xl font-bold md:text-4xl">
                ¡Gracias por sembrar esperanza!
              </h1>
              <p className="mt-4 text-muted-foreground">
                Tu intención de donación por <strong className="text-foreground">{formatCurrency(getFinalAmount())}</strong> ha sido registrada. 
                Nos pondremos en contacto contigo pronto para completar el proceso.
              </p>
              <div className="mt-8 rounded-xl bg-gradient-warm p-6">
                <Leaf className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-3 font-display italic text-foreground/80">
                  "Gracias por sembrar esperanza junto a nosotros."
                </p>
              </div>
              <Button variant="nature" size="lg" className="mt-8" onClick={() => setIsSuccess(false)}>
                Realizar otra donación
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-nature py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto h-12 w-12 text-secondary animate-pulse" />
            <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Haz tu <span className="text-primary">Donación</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tu aporte es una semilla de esperanza que transforma vidas y fortalece el campo colombiano.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Información de donación</CardTitle>
                <CardDescription>
                  Completa el formulario para registrar tu intención de donación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Selecciona un monto</Label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`rounded-lg border-2 p-3 text-center font-semibold transition-all ${
                            selectedAmount === amount
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          {formatCurrency(amount)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">O ingresa otro monto (COP)</Label>
                    <Input
                      id="custom-amount"
                      type="text"
                      placeholder="Ej: 75000"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <hr className="border-border" />

                  {/* Personal Info */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿Hay algún proyecto específico que te gustaría apoyar?"
                      rows={3}
                    />
                  </div>

                  {/* Summary */}
                  {getFinalAmount() > 0 && (
                    <div className="rounded-xl bg-gradient-warm p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Monto a donar:</span>
                        <span className="text-xl font-bold text-primary">
                          {formatCurrency(getFinalAmount())}
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hope"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting || getFinalAmount() < 10000}
                  >
                    {isSubmitting ? (
                      "Procesando..."
                    ) : (
                      <>
                        <Heart className="h-5 w-5" />
                        Confirmar donación
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar este formulario, registrarás tu intención de donación. 
                    Nos pondremos en contacto contigo para completar el proceso de forma segura.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Trust Message */}
            <div className="mt-8 text-center">
              <Leaf className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 font-display italic text-muted-foreground">
                "Gracias por sembrar esperanza junto a nosotros."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Métodos de <span className="text-primary">Pago</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Elige la opción que más te convenga para realizar tu aporte.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Bank Transfer */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Transferencia Bancaria</CardTitle>
                      <CardDescription>Transfiere directamente a nuestra cuenta</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Banco:</span>
                      <span className="font-medium">Bancolombia</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tipo de cuenta:</span>
                      <span className="font-medium">Ahorros</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Número:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium font-mono">123-456789-00</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("12345678900");
                            toast({ title: "Copiado", description: "Número de cuenta copiado al portapapeles" });
                          }}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          aria-label="Copiar número de cuenta"
                        >
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Titular:</span>
                      <span className="font-medium">Aportecampo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">NIT:</span>
                      <span className="font-medium">900.123.456-7</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Envíanos el comprobante a nuestro correo o WhatsApp para confirmar tu donación.
                  </p>
                </CardContent>
              </Card>

              {/* Online Platforms */}
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-secondary/20 p-3">
                      <CreditCard className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Plataformas Online</CardTitle>
                      <CardDescription>Dona con tarjeta o billetera virtual</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=EXAMPLE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#003087] flex items-center justify-center text-white font-bold text-sm">
                        PP
                      </div>
                      <div>
                        <span className="font-medium">PayPal</span>
                        <p className="text-xs text-muted-foreground">Tarjeta internacional</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>

                  <a
                    href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=EXAMPLE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#00B1EA] flex items-center justify-center text-white font-bold text-sm">
                        MP
                      </div>
                      <div>
                        <span className="font-medium">Mercado Pago</span>
                        <p className="text-xs text-muted-foreground">PSE, Nequi, Daviplata</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>

                  <a
                    href="https://epayco.com/checkout/EXAMPLE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white font-bold text-sm">
                        eP
                      </div>
                      <div>
                        <span className="font-medium">ePayco</span>
                        <p className="text-xs text-muted-foreground">Tarjetas y pagos locales</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Note */}
            <div className="mt-10 text-center p-6 rounded-xl bg-gradient-warm">
              <p className="text-muted-foreground">
                ¿Tienes dudas sobre cómo donar? Escríbenos a{" "}
                <a href="mailto:donaciones@aportecampo.org" className="text-primary font-medium hover:underline">
                  donaciones@aportecampo.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
