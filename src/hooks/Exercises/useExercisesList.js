import {useState, useEffect} from "react";

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

  useEffect(() => {
    setExercises((prev) => {
      prev = ExercisesJson;
      return prev;
    });
    
    return () => {
      setExercises((prev) => {
        prev = [];
        return prev;
      });
    };
  }, []);

  return { exercises };
};
