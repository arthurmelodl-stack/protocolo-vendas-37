import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock, CheckCircle, Gift } from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";

interface QuizAnswers {
  user_country?: string;
  nicho?: string;
  experiencia?: string;
  dolor_principal?: string;
  conciencia_sistema?: string;
  ticketPromedio?: string;
  obstaculoPrecio?: string;
  confianza_portafolio?: string;
  compromiso_inversion?: string;
}

interface CaptureStepProps {
  onSubmit: (email: string) => void;
  quizAnswers: QuizAnswers;
}

const CaptureStep = ({ onSubmit, quizAnswers }: CaptureStepProps) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const getUtmParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get("utm_source") || null,
      utm_medium: urlParams.get("utm_medium") || null,
      utm_campaign: urlParams.get("utm_campaign") || null,
      utm_content: urlParams.get("utm_content") || null,
      utm_term: urlParams.get("utm_term") || null,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const utmParams = getUtmParams();
      try {
        await fetch("https://hook.us2.make.com/n161bhsdae97sd6c7m9q9goaf86iucj3", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email,
            versao_ticket: "37",
            ...utmParams,
            ...quizAnswers
          }),
        });
      } catch (error) {
        console.error("Erro ao enviar para webhook:", error);
      }
      onSubmit(email);
    }
  };

  const deliverables = [
    "Tu Diagnóstico Completo Personalizado (PDF)",
    "Plan de Acción Rápido",
    "Acceso a la Solución Definitiva con Descuento Exclusivo",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen quiz-container flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-card text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-success flex items-center justify-center">
            <Gift className="w-8 h-8 text-accent-foreground" />
          </div>

          <h2 className="headline-section mb-4">¡Diagnóstico Completo! 🎯</h2>

          <p className="text-body mb-6">
            Pero antes de mostrarte la solución personalizada para TU negocio,
            necesitamos tu mejor email para enviarte:
          </p>

          <div className="space-y-3 mb-8 text-left">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="tu@email.com"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <QuizButton onClick={() => {}} disabled={!isValid} showArrow={false}>
              Recibir Mi Diagnóstico + Solución
            </QuizButton>
          </form>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Tus datos están protegidos. No spam.</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaptureStep;
