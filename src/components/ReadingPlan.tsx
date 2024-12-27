import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

// Definición del tipo de datos
type PlanDay = {
  day: number;
  reading: string;
  completed: boolean;
  quote: string; // Texto de la cita a leer con la versión Reina-Valera
};

// Datos iniciales del plan
const initialPlan: PlanDay[] = [
  {
    day: 1,
    reading: "Génesis 1-3",
    completed: false,
    quote:
      "En el principio creó Dios los cielos y la tierra. — Génesis 1:1 (Reina-Valera)",
  },
  {
    day: 2,
    reading: "Génesis 4-7",
    completed: false,
    quote:
      "Y Jehová miró con agrado a Abel y a su ofrenda; mas no miró con agrado a Caín ni a la ofrenda suya. — Génesis 4:4-5 (Reina-Valera)",
  },
  {
    day: 3,
    reading: "Génesis 8-11",
    completed: false,
    quote:
      "Estableceré mi pacto con vosotros, y no exterminaré ya más toda carne con aguas de diluvio. — Génesis 9:11 (Reina-Valera)",
  },
  {
    day: 4,
    reading: "Job 1-5",
    completed: false,
    quote:
      "¿Has considerado a mi siervo Job, que no hay otro como él en la tierra? — Job 1:8 (Reina-Valera)",
  },
  {
    day: 5,
    reading: "Job 6-9",
    completed: false,
    quote:
      "He aquí, bienaventurado es el hombre a quien Dios castiga; por tanto, no menosprecies la corrección del Todopoderoso. — Job 5:17 (Reina-Valera)",
  },
  // Añade más días según el plan...
];

const ReadingPlan: React.FC = () => {
  const [plan, setPlan] = useState<PlanDay[]>([]);

  useEffect(() => {
    const savedPlan = localStorage.getItem("readingPlan");
    if (savedPlan) {
      const parsedPlan = JSON.parse(savedPlan);
      if (Array.isArray(parsedPlan) && parsedPlan.length > 0) {
        setPlan(parsedPlan);
      } else {
        setPlan(initialPlan);
      }
    } else {
      setPlan(initialPlan);
    }
  }, []);

  useEffect(() => {
    if (plan.length > 0) {
      localStorage.setItem("readingPlan", JSON.stringify(plan));
    }
  }, [plan]);

  const toggleComplete = (day: number) => {
    const updatedPlan = plan.map((entry) =>
      entry.day === day ? { ...entry, completed: !entry.completed } : entry
    );
    setPlan(updatedPlan);
  };

  if (plan.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-6"
      >
        <HelpCircle className="w-10 h-10 text-blue-500 mx-auto mb-4" />
        <p>Cargando el plan de lectura...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6  mx-auto bg-white rounded-xl shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Plan de Lectura Interactivo</h1>
      <ul className="space-y-4">
        {plan.map((entry) => (
          <motion.li
            key={entry.day}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span>
                <strong>Día {entry.day}:</strong> {entry.reading}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => toggleComplete(entry.day)}
                className={`py-2 px-4 rounded-lg text-white font-medium ${
                  entry.completed ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {entry.completed ? "Completado" : "Marcar"}
              </motion.button>
            </div>
            <p className="mt-2 text-gray-600 italic">{entry.quote}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ReadingPlan;
