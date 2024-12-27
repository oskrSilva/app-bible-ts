import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DailyPage } from './pages/DailyPage';
import { QuizPage } from './pages/QuizPage';
import { ResourcesPage } from './pages/ResourcesPage';
import ReadingPlan from './components/ReadingPlan';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<ReadingPlan />} />
          {/* <Route path="/daily" element={<DailyPage />} /> */}
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/community" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Comunidad</h1></div>} />
          <Route path="/devotional" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Devocional</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;