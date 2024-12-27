import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { type Answer } from '../types/quiz';

interface QuizCardProps {
  question: string;
  answers: Answer[];
  onAnswerSelect: (id: number) => void;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
}

export function QuizCard({ question, answers, onAnswerSelect, selectedAnswer, isCorrect }: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg shrink-0">
          <HelpCircle className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
      </div>

      <div className="space-y-3">
        {answers.map((answer) => (
          <motion.button
            key={answer.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswerSelect(answer.id)}
            className={`w-full p-4 rounded-lg text-left transition-colors ${
              selectedAnswer === answer.id
                ? isCorrect === null
                  ? 'bg-blue-100 border-2 border-blue-300'
                  : isCorrect
                  ? 'bg-green-100 border-2 border-green-300'
                  : 'bg-red-100 border-2 border-red-300'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            {answer.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}