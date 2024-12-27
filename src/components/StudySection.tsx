import { motion } from 'framer-motion';
import { Book, CheckCircle } from 'lucide-react';

interface StudySectionProps {
  title: string;
  description: string;
  progress: number;
  onClick: () => void;
}

export function StudySection({ title, description, progress, onClick }: StudySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Book className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progreso</span>
          <span className="text-sm font-medium text-purple-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-purple-600 h-2 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}