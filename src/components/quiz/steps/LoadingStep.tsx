import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, BarChart3, Sparkles } from "lucide-react";

interface LoadingStepProps {
  onComplete: () => void;
}

const loadingSteps = [
  { icon: Brain, text: "Analizando tus respuestas... 🧠" },
  { icon: BarChart3, text: "Identificando tu perfil... 📊" },
  { icon: Sparkles, text: "Preparando tu diagnóstico personalizado... ✨" },
];

const LoadingStep = ({ onComplete }: LoadingStepProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 1200);
    const timer2 = setTimeout(() => setCurrentStep(2), 2400);
    const timer3 = setTimeout(() => onComplete(), 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen quiz-container flex items-center justify-center px-4"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-primary flex items-center justify-center"
        >
          <Brain className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        <div className="space-y-4">
          {loadingSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStep;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3, 
                  x: 0,
                  scale: index === currentStep ? 1.05 : 1
                }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  isActive ? "bg-card shadow-card" : "bg-muted/30"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isActive ? "bg-primary/10" : "bg-muted"
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <p className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingStep;
