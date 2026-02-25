import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  text: string;
  author: string;
  avatarSrc?: string;
  delay?: number;
}

const TestimonialCard = ({ text, author, avatarSrc, delay = 0 }: TestimonialCardProps) => {
  const initials = author.split(" ").map(n => n[0]).join("").slice(0, 2);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="testimonial-card"
    >
      <Quote className="w-8 h-8 text-primary/30 mb-3" />
      <div className="flex items-start gap-3">
        {avatarSrc && (
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src={avatarSrc} alt={author} className="object-cover" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        )}
        <div>
          <p className="text-foreground mb-4 not-italic">"{text}"</p>
          <p className="text-sm font-semibold text-primary not-italic">
            {author}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
