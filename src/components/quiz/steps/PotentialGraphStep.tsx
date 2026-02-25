import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";
import potentialGraph from "@/assets/potential-graph.png";

interface PotentialGraphStepProps {
  onContinue: () => void;
}

const PotentialGraphStep = ({ onContinue }: PotentialGraphStepProps) => {
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
          <h2 className="headline-section mb-4">
            ¡Tu potencial de facturación es ALTO! 🟢
          </h2>

          <p className="text-body mb-6">
            Basado en tus respuestas, tu nicho tiene una demanda gigante y puedes
            tener una agenda predecible en menos de 30 días.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <img
              src={potentialGraph}
              alt="Gráfico de potencial de facturación"
              className="w-full rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-4 border-2 border-destructive/40 bg-destructive/5 rounded-xl text-left"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-sm font-medium">
                🚨 <span className="font-bold">ATENCIÓN:</span> Este resultado no es mágico ni está garantizado. Si continúas operando a ciegas y dependiendo de la suerte sin un sistema predecible, tu agenda seguirá igual. Para alcanzar este potencial real, necesitas implementar un{" "}
                <span className="font-bold">Sistema de Captación Inmersiva</span>.
              </p>
            </div>
          </motion.div>

          <QuizButton onClick={onContinue}>Ver mi Plan de Acción</QuizButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PotentialGraphStep;
