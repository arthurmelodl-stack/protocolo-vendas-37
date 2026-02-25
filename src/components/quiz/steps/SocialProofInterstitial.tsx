import { motion } from "framer-motion";
import { useMemo } from "react";
import QuizButton from "@/components/quiz/QuizButton";
import whatsappImg from "@/assets/whatsapp-notifications.png";

interface SocialProofInterstitialProps {
  userCountry: string;
  userNiche: string;
  onContinue: () => void;
}

const NICHE_LABELS: Record<string, string> = {
  bodas: "Bodas y Eventos",
  retratos: "Retratos y Moda",
  familia: "Newborn y Familia",
  corporativo: "Corporativo y Productos",
};

const SocialProofInterstitial = ({ userCountry, userNiche, onContinue }: SocialProofInterstitialProps) => {
  const randomNumber = useMemo(() => Math.floor(Math.random() * 101) + 100, []);
  const nicheLabel = NICHE_LABELS[userNiche] || userNiche;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen quiz-container flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-card text-center"
        >
          <h2 className="headline-section mb-4">¡No estás solo! 📸</h2>

          <p className="text-body mb-6">
            Más de <span className="font-bold text-foreground">{randomNumber}</span> fotógrafos de{" "}
            <span className="font-bold text-foreground">{nicheLabel}</span> en{" "}
            <span className="font-bold text-foreground">{userCountry}</span> ya llenaron su agenda
            con el protocolo correcto.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <img
              src={whatsappImg}
              alt="Notificaciones de WhatsApp de clientes interesados"
              className="w-full rounded-xl shadow-card"
            />
          </motion.div>

          <QuizButton onClick={onContinue}>Continuar</QuizButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialProofInterstitial;
