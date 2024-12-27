import { StudyList } from '../components/StudyList';

export function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recursos de Estudio</h1>
      <StudyList />
    </div>
  );
}