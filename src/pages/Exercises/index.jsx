import React from "react";
import ExercisesList from "../../components/Exercises/ExercisesList";
import { useExercisesList } from "../../hooks/Exercises/useExercisesList";

const Exercises = () => {
  const {exercises} = useExercisesList();

  return (
    <>
      <ExercisesList exercises={exercises} />
    </>
  );
};

export default Exercises;
