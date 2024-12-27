import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  bgColor: string;
  iconColor: string;
}

export function FeatureCard({ title, description, icon: Icon, onClick, bgColor, iconColor }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${bgColor} p-6 rounded-xl shadow-lg cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 ${iconColor} rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/90">{description}</p>
    </motion.div>
  );
}