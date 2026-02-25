import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface QuizOptionProps {
  emoji: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const QuizOption = ({ emoji, text, isSelected, onClick, index }: QuizOptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className={`quiz-option relative ${isSelected ? "quiz-option-selected" : ""}`}
    >
      <div className="flex items-start gap-4">
        <span className="emoji-icon flex-shrink-0">{emoji}</span>
        <p className="text-base md:text-lg text-foreground font-medium flex-1">
          {text}
        </p>
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
          >
            <Check className="w-4 h-4 text-primary-foreground" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizOption;
