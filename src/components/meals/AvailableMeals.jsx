import React from "react";
import DUMMYMEALS from "./mealsData";
import MealsItem from "./MealsItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  return (
    <section className="max-w-[60rem] w-[90%] my-[2rem] mx-[auto] animate-meals-appear">
      <Card>
        {DUMMYMEALS.map((meal, id) => (
          <ul key={id}>
            <MealsItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          </ul>
        ))}
      </Card>
    </section>
  );
};

export default AvailableMeals;
