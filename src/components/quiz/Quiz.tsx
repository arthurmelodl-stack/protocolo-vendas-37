import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LandingStep from "./steps/LandingStep";
import CountryStep from "./steps/CountryStep";
import QuestionStep from "./steps/QuestionStep";
import SocialProofInterstitial from "./steps/SocialProofInterstitial";
import SocialProofStep from "./steps/SocialProofStep";
import ExpertStep from "./steps/ExpertStep";
import LoadingStep from "./steps/LoadingStep";
import PotentialGraphStep from "./steps/PotentialGraphStep";
import CaptureStep from "./steps/CaptureStep";
import SalesPageStep from "./steps/SalesPageStep";
import testimonialJavier from "@/assets/testimonial-javier.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

type QuizStep =
  | "landing"
  | "country"
  | "nicho"
  | "socialProofNiche"
  | "experiencia"
  | "question1"
  | "socialProof1"
  | "question2"
  | "socialProof2"
  | "ticketPromedio"
  | "obstaculoPrecio"
  | "question3"
  | "expert"
  | "question4"
  | "loading"
  | "potentialGraph"
  | "capture"
  | "salesPage";

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
  email?: string;
}

const TOTAL_QUESTIONS = 9;

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("landing");
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const goToStep = (step: QuizStep) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadingComplete = useCallback(() => {
    goToStep("potentialGraph");
  }, []);

  const handleEmailSubmit = (email: string) => {
    setAnswers((prev) => ({ ...prev, email }));
    goToStep("salesPage");
  };

  const handlePurchase = () => {
    window.location.href = "https://pay.hotmart.com/T104695297D?off=ledfmhem&checkoutMode=10";
  };

  const handleDecline = () => {
    if (confirm("¿Estás seguro? Esta oferta no estará disponible mañana.")) {
      window.location.reload();
    }
  };

  const getHeadline = () => {
    switch (answers.nicho) {
      case "bodas":
        return "La Estrategia Exacta para que Fotógrafos de Bodas dejen de competir por precio.";
      case "retratos":
        return "Cómo vender Sesiones de Retrato al doble del valor actual.";
      case "familia":
        return "El método para llenar tu agenda de Newborn y Familia sin depender de referidos.";
      case "corporativo":
        return "Cómo cerrar contratos Corporativos de alto valor recurrentes.";
      default:
        return "Tu Plan Personalizado de Fotografía";
    }
  };

  const getSubheadline = () => {
    switch (answers.ticketPromedio) {
      case "bajo":
        return "Deja de cobrar menos de $100. Descubre cómo elevar tu percepción de valor inmediatamente.";
      case "medio":
        return "Ya cobras un valor justo, pero te enseñaré a escalar al nivel Premium (+$500).";
      default:
        return undefined;
    }
  };

  const getTestimonialFilter = () => {
    const dolor = answers.dolor_principal;
    if (dolor === "trafico") return "trafico";
    if (dolor === "ventas") return "ventas";
    if (dolor === "precio") return "precio";
    return undefined;
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === "landing" && (
          <LandingStep key="landing" onStart={() => goToStep("country")} />
        )}

        {currentStep === "country" && (
          <CountryStep
            key="country"
            questionNumber={1}
            totalQuestions={TOTAL_QUESTIONS}
            onAnswer={(country) => {
              setAnswers((prev) => ({ ...prev, user_country: country }));
              goToStep("nicho");
            }}
          />
        )}

        {currentStep === "nicho" && (
          <QuestionStep
            key="nicho"
            questionNumber={2}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="📸"
            question="¿Cuál es tu área de actuación principal en la fotografía hoy?"
            options={[
              { emoji: "💒", text: "Bodas y Eventos Sociales" },
              { emoji: "📷", text: "Retratos / Moda / Femenino" },
              { emoji: "👶", text: "Newborn y Familia" },
              { emoji: "🏢", text: "Corporativo y Productos" },
            ]}
            onAnswer={(answer) => {
              const values = ["bodas", "retratos", "familia", "corporativo"];
              setAnswers((prev) => ({ ...prev, nicho: values[answer] }));
              goToStep("socialProofNiche");
            }}
          />
        )}

        {currentStep === "socialProofNiche" && (
          <SocialProofInterstitial
            key="socialProofNiche"
            userCountry={answers.user_country || "tu país"}
            userNiche={answers.nicho || "fotografía"}
            onContinue={() => goToStep("experiencia")}
          />
        )}

        {currentStep === "experiencia" && (
          <QuestionStep
            key="experiencia"
            questionNumber={3}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="⏳"
            question="¿Cuánto tiempo llevas actuando profesionalmente en el mercado?"
            options={[
              { emoji: "🌱", text: "Soy principiante (Menos de 1 año)" },
              { emoji: "📈", text: "Intermedio (1 a 3 años)" },
              { emoji: "🏆", text: "Veterano (Más de 3 años)" },
            ]}
            onAnswer={(answer) => {
              const values = ["principiante", "intermedio", "veterano"];
              setAnswers((prev) => ({ ...prev, experiencia: values[answer] }));
              goToStep("question1");
            }}
          />
        )}

        {currentStep === "question1" && (
          <QuestionStep
            key="question1"
            questionNumber={4}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="😰"
            question="¿Cuál es tu MAYOR dolor ahora mismo en tu negocio de fotografía?"
            subtitle="Sé honesto. Esto es confidencial y nos ayudará a darte la solución exacta."
            options={[
              { emoji: "😰", text: "No sé cómo atraer clientes de forma constante (dependo de la suerte)" },
              { emoji: "💬", text: "Recibo mensajes, pero pocos cierran la venta" },
              { emoji: "💰", text: "Mis clientes siempre me piden descuentos y no valoran mi trabajo" },
            ]}
            onAnswer={(answer) => {
              const values = ["trafico", "ventas", "precio"];
              setAnswers((prev) => ({ ...prev, dolor_principal: values[answer] }));
              goToStep("socialProof1");
            }}
          />
        )}

        {currentStep === "socialProof1" && (
          <SocialProofStep
            key="socialProof1"
            title="¡Alto! 🛑 Antes de continuar, necesitas ver esto..."
            newsCard={{
              headline: "Fotógrafos Latinos Triplican sus Reservas con Nueva Estrategia de Publicidad Digital",
              subtitle: "Estudio revela que 87% de fotógrafos que usan anuncios pagos tienen agenda llena",
              source: "Fuente: Estudio Latino Fotógrafos 2024",
            }}
            testimonial={{
              text: "Yo estaba justo donde tú estás. Publicaba en Instagram y esperaba milagros. Desde que apliqué este Protocolo, mi agenda se llenó en 3 semanas. Dejé de depender de referencias y ahora tengo un sistema predecible.",
              author: "Javier M., Fotógrafo de Bodas, Ciudad de México 🇲🇽",
              avatarSrc: testimonialJavier,
            }}
            onContinue={() => goToStep("question2")}
            ctaText="Continuar con Mi Diagnóstico"
          />
        )}

        {currentStep === "question2" && (
          <QuestionStep
            key="question2"
            questionNumber={5}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="💭"
            question="¿Estás de acuerdo en que depender SOLO de recomendaciones o del botón 'Promocionar' de Instagram NO es un sistema predecible para un negocio serio?"
            options={[
              { emoji: "✅", text: "Sí, estoy totalmente de acuerdo. Necesito un sistema real." },
              { emoji: "🤔", text: "No estoy seguro. Creo que puede funcionar." },
            ]}
            onAnswer={(answer) => {
              const values = ["si_de_acuerdo", "no_seguro"];
              setAnswers((prev) => ({ ...prev, conciencia_sistema: values[answer] }));
              goToStep("socialProof2");
            }}
          />
        )}

        {currentStep === "socialProof2" && (
          <SocialProofStep
            key="socialProof2"
            title="¡No estás solo en esto! 🤝"
            study={{
              title: "Estudio Business Review 2024",
              text: "Los negocios que utilizan anuncios segmentados tienen 340% más probabilidad de conversión que los que dependen solo de alcance orgánico.",
              translation: "(Traducción: Estudio gringo comprueba que anuncios = más ventas)",
            }}
            testimonial={{
              text: "Mi problema era la conversión. Mucha gente preguntaba, pocos compraban. Este Protocolo me enseñó a vender VALOR, no precio. Ahora cuando me piden descuento, sé exactamente qué responder. Mi facturación subió 40% en 2 meses.",
              author: "Sofía R., Fotógrafa de Retratos, Bogotá 🇨🇴",
              avatarSrc: testimonialSofia,
            }}
            onContinue={() => goToStep("ticketPromedio")}
            ctaText="Siguiente Pregunta"
          />
        )}

        {currentStep === "ticketPromedio" && (
          <QuestionStep
            key="ticketPromedio"
            questionNumber={6}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="💵"
            question="¿Cuál es el valor promedio que cobras por sesión/evento hoy?"
            options={[
              { emoji: "📉", text: "Menos de $100 USD (Bajo)" },
              { emoji: "📊", text: "Entre $100 y $300 USD (Medio)" },
              { emoji: "📈", text: "Más de $300 USD (Alto)" },
            ]}
            onAnswer={(answer) => {
              const values = ["bajo", "medio", "alto"];
              setAnswers((prev) => ({ ...prev, ticketPromedio: values[answer] }));
              goToStep("obstaculoPrecio");
            }}
          />
        )}

        {currentStep === "obstaculoPrecio" && (
          <QuestionStep
            key="obstaculoPrecio"
            questionNumber={7}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="🚧"
            question="¿Qué es lo que te impide cobrar más caro hoy?"
            options={[
              { emoji: "🌍", text: "Siento que los clientes de mi zona no pagarían más" },
              { emoji: "📸", text: "Mi portafolio aún no se ve 'premium'" },
              { emoji: "😨", text: "Me da miedo subir precios y perder clientes" },
            ]}
            onAnswer={(answer) => {
              const values = ["creencia_zona", "portafolio", "miedo"];
              setAnswers((prev) => ({ ...prev, obstaculoPrecio: values[answer] }));
              goToStep("question3");
            }}
          />
        )}

        {currentStep === "question3" && (
          <QuestionStep
            key="question3"
            questionNumber={8}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="🤔"
            question="Sé sincero: ¿Crees que tu portafolio es excelente, pero AÚN ASÍ te cuesta cerrar ventas?"
            subtitle="Esta es la pregunta que separa fotógrafos amateurs de profesionales."
            options={[
              { emoji: "😓", text: "Sí, mi portafolio es bueno pero no vendo lo suficiente." },
              { emoji: "📸", text: "No, creo que mi portafolio necesita mejorar primero." },
            ]}
            onAnswer={(answer) => {
              const values = ["si_bueno_no_vendo", "no_necesita_mejorar"];
              setAnswers((prev) => ({ ...prev, confianza_portafolio: values[answer] }));
              goToStep("expert");
            }}
            feedbackAfterSelect={{
              0: "Has identificado el Error #1. Continúa para descubrir la solución.",
              1: "Interesante. Puede que no sea tu portafolio el problema. Descubre qué es.",
            }}
          />
        )}

        {currentStep === "expert" && (
          <ExpertStep key="expert" onContinue={() => goToStep("question4")} />
        )}

        {currentStep === "question4" && (
          <QuestionStep
            key="question4"
            questionNumber={9}
            totalQuestions={TOTAL_QUESTIONS}
            emoji="🚨"
            question="Última pregunta: ¿Estás dispuesto a invertir MENOS que lo que cuesta una cena con tu pareja para tener el sistema que garantice clientes predecibles?"
            subtitle="Piensa: ¿Cuánto vale para ti no depender más de la suerte?"
            options={[
              { emoji: "💪", text: "Sí, estoy listo para invertir en mi negocio hoy." },
              { emoji: "🤷", text: "No, prefiero seguir buscando soluciones gratuitas." },
            ]}
            onAnswer={(answer) => {
              const values = ["listo_para_invertir", "prefiere_gratis"];
              setAnswers((prev) => ({ ...prev, compromiso_inversion: values[answer] }));
              goToStep("loading");
            }}
          />
        )}

        {currentStep === "loading" && (
          <LoadingStep key="loading" onComplete={handleLoadingComplete} />
        )}

        {currentStep === "potentialGraph" && (
          <PotentialGraphStep key="potentialGraph" onContinue={() => goToStep("capture")} />
        )}

        {currentStep === "capture" && (
          <CaptureStep key="capture" onSubmit={handleEmailSubmit} quizAnswers={answers} />
        )}

        {currentStep === "salesPage" && (
          <SalesPageStep
            key="salesPage"
            onPurchase={handlePurchase}
            onDecline={handleDecline}
            dynamicHeadline={getHeadline()}
            dynamicSubheadline={getSubheadline()}
            testimonialFilter={getTestimonialFilter()}
            userNiche={answers.nicho}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
