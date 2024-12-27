import { DailyVerse } from '../components/DailyVerse';

export function DailyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Estudio Diario</h1>
      <DailyVerse />
    </div>
  );
}