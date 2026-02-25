import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface QuizButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  showArrow?: boolean;
}

const QuizButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  disabled = false,
  showArrow = true 
}: QuizButtonProps) => {
  if (variant === "secondary") {
    return (
      <button onClick={onClick} className="cta-secondary" disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`cta-primary flex items-center justify-center gap-2 w-full md:w-auto ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </motion.button>
  );
};

export default QuizButton;
