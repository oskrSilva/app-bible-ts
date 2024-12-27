import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface VerseCardProps {
  verse: string;
  reference: string;
  onClick: () => void;
}

export function VerseCard({ verse, reference, onClick }: VerseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-100 rounded-lg">
          <BookOpen className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <p className="text-gray-600 mb-3 italic">{verse}</p>
          <p className="text-sm font-semibold text-indigo-600">{reference}</p>
        </div>
      </div>
    </motion.div>
  );
}