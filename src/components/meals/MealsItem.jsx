import MealItemForm from "./MealItemForm";

const MealsItem = ({ name, description, price }) => {
  return (
    <li className="flex justify-between m-[1rem] border-b border-gray-300">
      <div>
        <h3 className="my-0 ml-[0.25rem] mr-0">{name}</h3>
        <div className="italic">{description}</div>
        <div className="mt-[0.25rem] font-bold text-bg1 text-[1.25rem]">{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
