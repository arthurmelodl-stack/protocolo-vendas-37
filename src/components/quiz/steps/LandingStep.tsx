import { motion } from "framer-motion";
import { Camera, Shield, Clock, CheckCircle } from "lucide-react";
import QuizButton from "../QuizButton";
import heroImage from "@/assets/hero-photographer.jpg";

interface LandingStepProps {
  onStart: () => void;
}

const LandingStep = ({ onStart }: LandingStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen quiz-container flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 badge-success mb-6">
            <Camera className="w-4 h-4" />
            <span>Para Fotógrafos Profesionales</span>
          </div>
          
          <h1 className="headline-hero mb-6">
            Diagnóstico Gratuito: ¿Por Qué Tu Agenda de Fotógrafo No Está Llena? 📸
          </h1>
          
          <p className="text-body mb-8">
            Descubre el error #1 que te impide tener clientes predecibles y cómo solucionarlo en menos de 30 días.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={heroImage}
            alt="Fotógrafo profesional con agenda llena"
            className="w-64 h-64 mx-auto rounded-2xl shadow-card object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="badge-trust">
            <CheckCircle className="w-4 h-4" />
            <span>Solo 8 preguntas</span>
          </div>
          <div className="badge-trust">
            <Clock className="w-4 h-4" />
            <span>2 minutos</span>
          </div>
          <div className="badge-trust">
            <Shield className="w-4 h-4" />
            <span>100% anónimo y seguro</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <QuizButton onClick={onStart}>
            Comenzar Mi Diagnóstico Ahora
          </QuizButton>
          
          <p className="text-sm text-muted-foreground mt-4">
            🔒 Tus datos están protegidos con encriptación de punta a punta
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingStep;
