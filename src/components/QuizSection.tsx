import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { QuizCard } from './QuizCard';
import { useQuiz } from '../hooks/useQuiz';

export function QuizSection() {
  const { currentQuestion, checkAnswer, nextQuestion, progress } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerSelect = async (answerId: number) => {
    if (isCorrect !== null) return;
    
    setSelectedAnswer(answerId);
    const correct = checkAnswer(answerId);
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        nextQuestion();
      }, 1500);
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Brain className="w-6 h-6 text-blue-600" />
          Quiz Bíblico
        </h2>
        <span className="text-sm font-medium text-blue-600">
          Progreso: {progress}%
        </span>
      </div>

      {currentQuestion && (
        <QuizCard
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          onAnswerSelect={handleAnswerSelect}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect}
        />
      )}
    </section>
  );
}