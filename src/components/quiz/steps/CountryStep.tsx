import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import QuizButton from "@/components/quiz/QuizButton";
import QuizProgress from "@/components/quiz/QuizProgress";

interface CountryStepProps {
  onAnswer: (country: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const COUNTRIES = [
  "México", "Colombia", "Argentina", "Chile", "Perú", "Ecuador",
  "Venezuela", "Guatemala", "Cuba", "Bolivia", "República Dominicana",
  "Honduras", "Paraguay", "El Salvador", "Nicaragua", "Costa Rica",
  "Panamá", "Uruguay", "Puerto Rico", "España", "Brasil",
  "Estados Unidos", "Otro",
];

const CountryStep = ({ onAnswer, questionNumber, totalQuestions }: CountryStepProps) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtered = useMemo(
    () => COUNTRIES.filter((c) => normalize(c).includes(normalize(search))),
    [search]
  );

  const handleSelect = (country: string) => {
    setSelected(country);
    setSearch(country);
    setIsOpen(false);
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
          <span className="text-4xl mb-4 block">🌎</span>
          <h2 className="headline-section mb-3">¿De qué país eres?</h2>
          <p className="text-body">Esto nos ayuda a entender tu mercado local.</p>
        </motion.div>

        <div className="relative max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelected(null);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Busca o selecciona tu país..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-card-hover max-h-60 overflow-y-auto"
            >
              {filtered.length > 0 ? (
                filtered.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleSelect(country)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-primary/5 transition-colors first:rounded-t-xl last:rounded-b-xl text-foreground"
                  >
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    {country}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-muted-foreground text-center">
                  No se encontró el país
                </div>
              )}
            </motion.div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <QuizButton onClick={() => selected && onAnswer(selected)} disabled={!selected}>
            Continuar
          </QuizButton>
        </div>
      </div>
    </motion.div>
  );
};

export default CountryStep;
