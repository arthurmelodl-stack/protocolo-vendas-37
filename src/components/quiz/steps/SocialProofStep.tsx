import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";
import TestimonialCard from "@/components/quiz/TestimonialCard";

interface SocialProofStepProps {
  title: string;
  newsCard?: {
    headline: string;
    subtitle: string;
    source: string;
  };
  study?: {
    title: string;
    text: string;
    translation: string;
  };
  testimonial: {
    text: string;
    author: string;
    avatarSrc?: string;
  };
  onContinue: () => void;
  ctaText: string;
}

const SocialProofStep = ({
  title,
  newsCard,
  study,
  testimonial,
  onContinue,
  ctaText,
}: SocialProofStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen quiz-container flex items-center justify-center px-4 py-8"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="headline-section text-center mb-8"
        >
          {title}
        </motion.h2>

        {newsCard && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="quiz-card mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  ESTUDIO DE MERCADO: FOTÓGRAFOS LATAM 2025
                </span>
                <h3 className="font-heading font-bold text-lg text-foreground mt-1">
                  {newsCard.headline}
                </h3>
                <p className="text-muted-foreground mt-2">{newsCard.subtitle}</p>
                <p className="text-sm text-primary mt-3 font-medium">
                  {newsCard.source}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {study && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="quiz-card mb-6 border-l-4 border-l-accent"
          >
            <span className="badge-success mb-3">{study.title}</span>
            <p className="text-foreground font-medium mt-3">{study.text}</p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              {study.translation}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TestimonialCard
            text={testimonial.text}
            author={testimonial.author}
            avatarSrc={testimonial.avatarSrc}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <QuizButton onClick={onContinue}>{ctaText}</QuizButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialProofStep;
