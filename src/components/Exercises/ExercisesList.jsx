import React from "react";

const ExercisesList = (exercises = []) => {
  console.log('%c⧭', 'color: #00e600', exercises.exercises);
  return (
    <div>
      <ul>
        {exercises.exercises.map((exercise) => {
          console.log("%c⧭", "color: #ff0000", exercise.name);
          return (
            <li className="flex justify-center">
              <div className="flex flex-col w-96 my-3 p-3 bg-slate-500 rounded shadow-md">
                <span>
                  <strong>Name: </strong>
                  {exercise.name}
                </span>
                <span>
                  <strong>Primary muscle: </strong>
                  {exercise.primary_muscle}
                </span>
                <span>
                  <strong>Secondary muscle: </strong>
                  {exercise.secondary_muscle}
                </span>
                {/* <span><strong>Instuctions: </strong>{exercise.instuctions}</span>  */}
                <span>
                  <strong>Type: </strong>
                  {exercise.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExercisesList;
