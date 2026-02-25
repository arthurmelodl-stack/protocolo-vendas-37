import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  initialMinutes?: number;
}

const CountdownTimer = ({ initialMinutes = 15 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("quizTimerEnd");
    if (saved) {
      const endTime = parseInt(saved);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      if (remaining > 0) return remaining;
    }
    const endTime = Date.now() + initialMinutes * 60 * 1000;
    localStorage.setItem("quizTimerEnd", endTime.toString());
    return initialMinutes * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-badge">
      <Clock className="w-5 h-5" />
      <span>
        Esta oferta expira en: {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

export default CountdownTimer;
