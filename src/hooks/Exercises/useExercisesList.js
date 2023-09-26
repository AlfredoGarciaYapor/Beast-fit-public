import { useState, useEffect } from "react";
import openai from "../../gpt3";

const ExercisesJson = [
  {
    name: "Bench press",
    primary_muscle: ["Chest"],
    secondary_muscle: ["Shoulders", "Triceps"],
    instuctions: "Lorem Impusm",
    type: "Compound",
  },
  {
    name: "Incline Bench press",
    primary_muscle: ["Chest"],
    secondary_muscle: ["Shoulders", "Triceps"],
    instuctions: "Lorem Impusm",
    type: "Compound",
  },
  {
    name: "Lat pulldown",
    primary_muscle: ["back"],
    secondary_muscle: ["biceps"],
    instuctions: "Lorem Impusm",
    type: "Compound",
  },
  {
    name: "barbell Bicep curl",
    primary_muscle: ["Bicep"],
    secondary_muscle: [],
    instuctions: "Lorem Impusm",
    type: "Isolated",
  },
  {
    name: "Squats",
    primary_muscle: ["Quads", "Glutes"],
    secondary_muscle: ["Harmstrings", "Calves"],
    instuctions: "Lorem Impusm",
    type: "Compound",
  },
];

export const useExercisesList = () => {
  const [exercises, setExercises] = useState(ExercisesJson);

  function generatePrompt() {
    // const capitalizedAnimal =
    // animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggests the 5 best exercises you can do focused on hypertrophy for each of all muscle groups. Respond in JSON format using the following value as an example: { name: "Squats", primary_muscle: ["Quads", "Glutes"], secondary_muscle: ["Harmstrings", "Calves"], instuctions: "Lorem Impusm", type: "Compound", }`;
  }
  const generateResponse = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: generatePrompt() }],
    });

    const responsJson = JSON.parse(response.choices[0].message.content);
    console.log('%c⧭', 'color: #00a3cc', responsJson);
    console.log(response.choices[0].message);

    setExercises((prev) => {
      prev = responsJson;
      return prev;
    })
    
  };

  useEffect(() => {
    generateResponse();
    // setExercises((prev) => {
    //   prev = ExercisesJson;
    //   return prev;
    // });

    return () => {
      setExercises((prev) => {
        prev = [];
        return prev;
      });
    };
  }, []);

  return { exercises };
};
