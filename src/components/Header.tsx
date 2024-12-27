import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Heart className="w-8 h-8 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-900">Aprendizaje Bíblico</h1>
        </Link>
      </div>
    </header>
  );
}