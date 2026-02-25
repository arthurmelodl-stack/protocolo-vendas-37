import { motion } from "framer-motion";
import { Users } from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";
import TestimonialCard from "@/components/quiz/TestimonialCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ebookImage from "@/assets/ebook-mockup.jpg";
import testimonialIsabella from "@/assets/testimonial-isabella.jpg";
import testimonialAndres from "@/assets/testimonial-andres.jpg";

interface ExpertStepProps {
  onContinue: () => void;
}

const ExpertStep = ({ onContinue }: ExpertStepProps) => {
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
          ¡El cambio está más cerca de lo que imaginas! 🚀
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="quiz-card mb-6"
        >
          <div className="flex items-start gap-4">
            <Avatar className="w-14 h-14 flex-shrink-0">
              <AvatarImage src={testimonialIsabella} alt="Isabella" className="object-cover" />
              <AvatarFallback>IS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-foreground leading-relaxed">
                "Hola, soy <strong>Isabella del Club de Fotografía</strong> y durante 8 años he ayudado a más de 
                <strong> 2,000 fotógrafos</strong> en Latinoamérica a llenar sus agendas. 
                Lo que vas a descubrir ahora cambió mi negocio y el de cientos de colegas. 
                No es magia, es estrategia. Presta mucha atención al siguiente paso."
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <img
              src={ebookImage}
              alt="Protocolo Agenda Llena - Ebook"
              className="w-48 h-auto rounded-xl shadow-card-hover"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="badge-success whitespace-nowrap">
                <Users className="w-3 h-3" />
                <span className="text-xs">+2,000 fotógrafos</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TestimonialCard
            text="Yo era esclavo de mi negocio. Trabajaba 12 horas, pero mi agenda variaba de 0 a 100. El Protocolo me dio el sistema para tener clientes predecibles. Ahora mi publicidad trabaja 24/7 y yo solo me dedico a fotografiar y cobrar."
            author="Andrés P., Fotógrafo de Eventos Corporativos, Lima 🇵🇪"
            avatarSrc={testimonialAndres}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <QuizButton onClick={onContinue}>Última Pregunta</QuizButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExpertStep;
