import { motion } from "framer-motion";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgress = ({ currentStep, totalSteps }: QuizProgressProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Pregunta {currentStep} de {totalSteps}
        </span>
        <span className="text-sm font-bold text-primary">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
