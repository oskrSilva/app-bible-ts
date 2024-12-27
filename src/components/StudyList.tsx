import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { StudySection } from './StudySection';
import { studySections } from '../data/constants';

export function StudyList() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <Book className="w-6 h-6 text-purple-600" />
        Secciones de Estudio
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studySections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StudySection
              title={section.title}
              description={section.description}
              progress={section.progress}
              onClick={() => {}}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}