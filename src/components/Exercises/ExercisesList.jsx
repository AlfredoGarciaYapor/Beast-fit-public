import React from "react";

const ExercisesList = (exercises = []) => {
  console.log("%c⧭", "color: #733d00", exercises);
  const exercisesArray = Object.entries(exercises.exercises).map(
    ([key, value]) => {
      return { key, value };
    }
  );
  console.log("%c⧭", "color: #0088cc", exercisesArray);
  return (
    <div>
      <ul>
        {exercisesArray.map((muscle) => {
          console.log("%c⧭", "color: #917399", muscle.value);
          return (
            <>
              <h2 className="text-center text-xl text-slate-800 font-bold">{muscle.key}</h2>
              {
                // muscle.value != undefined &&
                muscle?.value.map((exercise) => {
                  return (
                    <li key={exercise.name} className="flex justify-center">
                      <div className="flex flex-col w-96 my-3 p-3 bg-slate-200 rounded shadow-md">
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
                })
              }
            </>
          );
        })}
        {/* {exercises.exercises.map((exercise,index) => {
          console.log('%c⧭', 'color: #aa00ff', exercise);
          return (
            <p>hola</p>
            <li key={index} className="flex justify-center">
              <div className="flex flex-col w-96 my-3 p-3 bg-slate-200 rounded shadow-md">
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
                {/* <span><strong>Instuctions: </strong>{exercise.instuctions}</span>
                <span>
                  <strong>Type: </strong>
                  {exercise.type}
                </span>
              </div>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default ExercisesList;
