import type { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "¿Quién construyó el arca según el libro del Génesis?",
    answers: [
      { id: 1, text: "Noé", isCorrect: true },
      { id: 2, text: "Abraham", isCorrect: false },
      { id: 3, text: "Moisés", isCorrect: false },
      { id: 4, text: "David", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "¿Cuál fue el primer milagro de Jesús?",
    answers: [
      { id: 1, text: "Multiplicar los panes", isCorrect: false },
      { id: 2, text: "Convertir agua en vino", isCorrect: true },
      { id: 3, text: "Caminar sobre el agua", isCorrect: false },
      { id: 4, text: "Resucitar a Lázaro", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "¿Cuántos libros tiene el Nuevo Testamento?",
    answers: [
      { id: 1, text: "27", isCorrect: true },
      { id: 2, text: "39", isCorrect: false },
      { id: 3, text: "66", isCorrect: false },
      { id: 4, text: "12", isCorrect: false }
    ]
  }
];