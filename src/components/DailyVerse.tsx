import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { VerseCard } from './VerseCard';
import { dailyVerse } from '../data/constants';

export function DailyVerse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ScrollText className="w-6 h-6 text-purple-600" />
        Versículo del Día
      </h2>
      <VerseCard
        verse={dailyVerse.verse}
        reference={dailyVerse.reference}
        onClick={() => {}}
      />
    </motion.div>
  );
}