import { Book, BookOpen, Brain, ScrollText, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Estudio Diario",
      description: "Versículos diarios con reflexiones y guías de estudio",
      icon: BookOpen,
      bgColor: "bg-purple-600",
      iconColor: "bg-purple-500",
      path: "/daily"
    },
    {
      title: "Quiz Bíblico",
      description: "Pon a prueba tu conocimiento con preguntas interactivas",
      icon: Brain,
      bgColor: "bg-blue-600",
      iconColor: "bg-blue-500",
      path: "/quiz"
    },
    {
      title: "Recursos de Estudio",
      description: "Material complementario para profundizar tu aprendizaje",
      icon: Book,
      bgColor: "bg-indigo-600",
      iconColor: "bg-indigo-500",
      path: "/resources"
    },
    {
      title: "Comunidad",
      description: "Conecta con otros estudiantes y comparte experiencias",
      icon: Users,
      bgColor: "bg-pink-600",
      iconColor: "bg-pink-500",
      path: "/community"
    },
    {
      title: "Devocional",
      description: "Lecturas diarias para tu crecimiento espiritual",
      icon: ScrollText,
      bgColor: "bg-teal-600",
      iconColor: "bg-teal-500",
      path: "/devotional"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 mb-12 relative z-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            onClick={() => navigate(feature.path)}
          />
        ))}
      </div>
    </section>
  );
}