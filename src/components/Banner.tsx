import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';

export function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 mb-12 rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <BookOpen className="w-8 h-8" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
          Descubre la Palabra de Dios
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/90 mb-8"
        >
          Aprende, explora y crece en tu fe a través de lecciones interactivas y quizzes bíblicos
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2"
        >
          {[1, 2, 3].map((i) => (
            <Star key={i} className="w-5 h-5 text-yellow-300" />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}