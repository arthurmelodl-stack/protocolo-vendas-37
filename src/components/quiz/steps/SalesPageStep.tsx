import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Lock,
  Smartphone,
  Gift,
  X,
} from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";
import CountdownTimer from "@/components/quiz/CountdownTimer";
import ebookImage from "@/assets/ebook-mockup.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Testimonial images
import testimonial1 from "@/assets/testimonials/1.webp";
import testimonial2 from "@/assets/testimonials/2.webp";
import testimonial3 from "@/assets/testimonials/3.webp";
import testimonial4 from "@/assets/testimonials/4.webp";
import testimonial5 from "@/assets/testimonials/5.webp";
import testimonial6 from "@/assets/testimonials/6.webp";
import testimonial8 from "@/assets/testimonials/8.webp";
import testimonial9 from "@/assets/testimonials/9.webp";
import testimonial10 from "@/assets/testimonials/10.webp";

interface SalesPageStepProps {
  onPurchase: () => void;
  onDecline: () => void;
  dynamicHeadline?: string;
  dynamicSubheadline?: string;
  testimonialFilter?: string;
  userNiche?: string;
}

const benefits = [
  "Cómo configurar tu primera campaña en menos de 2 horas (aunque nunca hayas usado Ads Manager)",
  "Las 3 audiencias exactas que convierten para fotógrafos en LATAM",
  "Scripts de mensajes para cerrar ventas cuando te escriban por el anuncio",
  "Cómo responder cuando te pidan descuento (y mantener tu precio)",
  "El presupuesto mínimo que necesitas (es menos de lo que imaginas)",
  "Casos reales de fotógrafos que llenaron su agenda en 30 días",
  "Plantillas de anuncios listas para copiar y pegar",
];

const faqs = [
  {
    question: "¿Funciona si nunca he usado anuncios?",
    answer: "Sí. El protocolo está diseñado para principiantes totales. Paso a paso.",
  },
  {
    question: "¿Cuánto dinero necesito invertir en anuncios?",
    answer: "Puedes empezar con solo $5 USD al día. Aprenderás cómo escalar.",
  },
  {
    question: "¿Funciona en mi país?",
    answer: "Sí. El protocolo fue probado en México, Colombia, Argentina, Chile, Perú y más.",
  },
  {
    question: "¿Y si no funciona para mí?",
    answer: "Garantía de 30 días. Si no ves resultados, devolvemos tu dinero.",
  },
  {
    question: "¿Es un curso o un ebook?",
    answer: "Es un ebook completo (PDF) con paso a paso, plantillas y ejemplos reales.",
  },
];

interface TestimonialImageProps {
  src: string;
  alt: string;
  delay?: number;
}

const TestimonialImage = ({ src, alt, delay = 0 }: TestimonialImageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="rounded-xl overflow-hidden shadow-lg"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-auto"
      loading="lazy"
    />
  </motion.div>
);

const SalesPageStep = ({
  onPurchase,
  onDecline,
  dynamicHeadline,
  dynamicSubheadline,
}: SalesPageStepProps) => {
  return (
    <div className="min-h-screen quiz-container">
      {/* Hero Section - Result */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="headline-hero mb-4"
          >
            ¡Aquí Está Tu Diagnóstico! 🎯
          </motion.h1>

          {dynamicHeadline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-heading font-bold text-primary mb-2"
            >
              {dynamicHeadline}
            </motion.p>
          )}

          {dynamicSubheadline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-accent font-medium mb-8"
            >
              {dynamicSubheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="quiz-card border-destructive/30 bg-destructive/5 mb-8"
          >
            <p className="text-lg font-medium text-muted-foreground mb-2">
              Según tus respuestas, tu Error #1 es:
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-destructive mb-4">
              ❌ NO TIENES UN SISTEMA DE CAPTACIÓN PREDECIBLE
            </h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>Dependes de la suerte o de referencias inconstantes</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>No sabes cuántos clientes tendrás el próximo mes</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>Tu negocio NO es escalable ni predecible</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Zone 1: Impact & Speed - After diagnosis (NO VIDEO - removed) */}
      <section className="px-4 py-8 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-section text-center mb-6"
          >
            Resultados en menos de 24 horas: ⚡
          </motion.h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-2 md:overflow-visible md:mx-0 md:px-0">
            <div className="min-w-[80%] snap-center md:min-w-0">
              <TestimonialImage src={testimonial8} alt="Mari - Tuve que pausar la campaña de tantas mensajes" />
            </div>
            <div className="min-w-[80%] snap-center md:min-w-0">
              <TestimonialImage src={testimonial2} alt="Lucía - 5 mamás pidiendo información" delay={0.1} />
            </div>
          </div>
        </div>
      </section>

      {/* "Pero aquí está la buena noticia..." */}
      <section className="px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-heading font-bold text-accent"
          >
            Pero aquí está la buena noticia...
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-12 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-body"
          >
            <p>Escucha, sé exactamente cómo te sientes.</p>
            <p>
              Durante años, yo también publiqué bonito en Instagram, esperé
              recomendaciones, y oré para que alguien me contratara.
            </p>
            <p>Algunos meses tenía 10 clientes. Otros, 2.</p>
            <p className="font-semibold text-foreground">
              NO SABÍA si podría pagar la renta. NO SABÍA si debía invertir en
              equipo. NO SABÍA nada.
            </p>
            <p>
              Hasta que descubrí el secreto que usan los fotógrafos que SIEMPRE
              tienen agenda llena:
            </p>
            <p className="text-xl font-heading font-bold text-primary text-center py-4">
              👉 PUBLICIDAD PAGADA ESTRATÉGICA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img
              src={ebookImage}
              alt="Protocolo Agenda Llena"
              className="w-64 mx-auto rounded-xl shadow-card-hover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-section mb-4">
              Presentamos: PROTOCOLO AGENDA LLENA 📖
            </h2>
            <p className="text-body max-w-xl mx-auto">
              El único sistema paso a paso que te enseña a dominar Facebook e
              Instagram Ads para fotógrafos, SIN conocimientos técnicos previos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-section text-center mb-8"
          >
            Esto es lo que vas a descubrir dentro:
          </motion.h3>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-card"
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-section mb-8"
          >
            Imagina esto por un momento...
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="quiz-card text-left space-y-4"
          >
            <p>Son las 9 AM de un lunes.</p>
            <p>
              Abres tu celular y tienes <strong>5 mensajes nuevos</strong> de
              personas preguntando por tus servicios.
            </p>
            <p className="text-muted-foreground">
              No son amigos. No son referencias. Son{" "}
              <strong className="text-foreground">CLIENTES REALES</strong> que
              encontraron tu anuncio.
            </p>
            <p>
              Tu agenda está llena para los próximos{" "}
              <strong>2 meses</strong>.
            </p>
            <p className="text-lg font-semibold text-primary">
              TU NEGOCIO AHORA ES PREDECIBLE.
            </p>
            <p className="text-muted-foreground italic">
              Esto NO es un sueño. Esto es lo que pasa cuando tienes el sistema
              correcto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zone 2: Objection Handling */}
      <section className="px-4 py-12 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-section text-center mb-8"
          >
            Funciona para cualquier nicho y nivel de experiencia:
          </motion.h3>

          <div className="grid gap-4 md:grid-cols-2">
            <TestimonialImage src={testimonial5} alt="Sofia - Iniciante con miedo a la tecnología logró subir campaña sola" />
            <TestimonialImage src={testimonial6} alt="Javi - Dejó de impulsionar y bajó costos con Ads Manager" delay={0.1} />
            <TestimonialImage src={testimonial9} alt="Carlos - Segmentación de Lujo para Bodas High Ticket" delay={0.15} />
            <TestimonialImage src={testimonial1} alt="Andrés - Marketing Inmersivo y CTR alto" delay={0.2} />
            <div className="md:col-span-2 max-w-md mx-auto w-full">
              <TestimonialImage src={testimonial3} alt="Mari - Facilidad con Audiencia Advantage+" delay={0.25} />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 py-12">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="guarantee-badge flex-col md:flex-row text-center md:text-left"
          >
            <Shield className="w-12 h-12 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                🛡️ GARANTÍA DE 30 DÍAS
              </h4>
              <p className="text-muted-foreground">
                Si aplicas el Protocolo y no ves NINGÚN resultado (ni siquiera
                un mensaje nuevo), te devolvemos el 100% de tu dinero. Sin
                preguntas. Sin dramas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zone 3: ROI & Price Anchoring */}
      <section className="px-4 py-12 bg-card/50">
        <div className="max-w-xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-section text-center mb-6"
          >
            ¿Vale la pena la inversión? 💰
          </motion.h3>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg border-2 border-accent/30"
            >
              <img src={testimonial10} alt="Martín - ROAS de 5, invirtió 50 volvió 250" className="w-full h-auto" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg border-2 border-accent/30"
            >
              <img src={testimonial4} alt="Leo - Bajo presupuesto, precio de un café" className="w-full h-auto" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="headline-section mb-4">
              ⚡ OFERTA EXCLUSIVA POR TIEMPO LIMITADO
            </h3>

            <CountdownTimer initialMinutes={15} />

            <div className="quiz-card mt-8">
              <div className="mb-6">
                <p className="price-original">$87 USD</p>
                <p className="price-current">$37 USD</p>
                <p className="badge-success mt-2">$50 USD OFF 💰</p>
              </div>

              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Gift className="w-5 h-5 text-primary" />
                  <span>
                    <strong>BÔNUS #1:</strong> Checklist de Configuración Rápida
                    (Valor: $27)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Gift className="w-5 h-5 text-primary" />
                  <span>
                    <strong>BÔNUS #2:</strong> 10 Templates de Anuncios Testados
                    (Valor: $23)
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <p className="text-muted-foreground">
                  Valor Total: <span className="line-through">$91 USD</span>
                </p>
                <p className="text-xl font-heading font-bold text-foreground">
                  Tú pagas hoy:{" "}
                  <span className="text-accent">$37 USD</span>
                </p>
              </div>

              <QuizButton onClick={onPurchase} showArrow={false}>
                💳 SÍ, QUIERO EL PROTOCOLO AHORA ($37 USD)
              </QuizButton>

              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4" /> Pago seguro
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" /> Acceso inmediato
                </span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-4 h-4" /> Cualquier dispositivo
                </span>
              </div>
            </div>

            <button
              onClick={onDecline}
              className="cta-secondary mt-6 block mx-auto"
            >
              No, prefiero seguir dependiendo de la suerte →
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h3 className="headline-section text-center mb-8">
            Preguntas Frecuentes
          </h3>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="quiz-card px-4"
              >
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-12 md:py-16 bg-gradient-trust text-secondary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p>Mira, has llegado hasta aquí.</p>
            <p>Eso significa que SABES que necesitas un cambio.</p>
            <p>
              Puedes cerrar esta página y seguir dependiendo de la suerte...
            </p>
            <p className="text-xl font-semibold">
              O puedes tomar la decisión que cambió la vida de más de 2,000
              fotógrafos.
            </p>
            <p className="text-lg opacity-80">La elección es tuya.</p>
            <p className="font-bold">
              Pero este precio NO estará disponible mañana.
            </p>

            <div className="pt-6">
              <QuizButton onClick={onPurchase} showArrow={false}>
                💳 DESCARGAR PROTOCOLO AHORA ($37 USD)
              </QuizButton>
            </div>

            <p className="text-sm opacity-70 pt-4">
              Nos vemos del otro lado. 👋
              <br />- Isabella
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalesPageStep;
