import { motion } from "framer-motion";
import { useState } from "react";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizOption from "@/components/quiz/QuizOption";

interface QuestionStepProps {
  questionNumber: number;
  totalQuestions: number;
  emoji: string;
  question: string;
  subtitle?: string;
  options: { emoji: string; text: string }[];
  onAnswer: (answer: number) => void;
  feedbackAfterSelect?: { [key: number]: string };
}

const QuestionStep = ({
  questionNumber,
  totalQuestions,
  emoji,
  question,
  subtitle,
  options,
  onAnswer,
  feedbackAfterSelect,
}: QuestionStepProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
    if (feedbackAfterSelect) {
      setShowFeedback(true);
      setTimeout(() => {
        onAnswer(index);
      }, 1500);
    } else {
      setTimeout(() => {
        onAnswer(index);
      }, 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen quiz-container flex flex-col px-4 py-8"
    >
      <div className="max-w-2xl mx-auto w-full">
        <QuizProgress currentStep={questionNumber} totalSteps={totalQuestions} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 mb-8 text-center"
        >
          <span className="text-4xl mb-4 block">{emoji}</span>
          <h2 className="headline-section mb-3">{question}</h2>
          {subtitle && <p className="text-body">{subtitle}</p>}
        </motion.div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <QuizOption
              key={index}
              emoji={option.emoji}
              text={option.text}
              isSelected={selectedOption === index}
              onClick={() => handleSelect(index)}
              index={index}
            />
          ))}
        </div>

        {showFeedback && selectedOption !== null && feedbackAfterSelect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 quiz-card bg-primary/5 border-primary/20 text-center"
          >
            <p className="text-foreground font-medium">
              {feedbackAfterSelect[selectedOption]}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuestionStep;
