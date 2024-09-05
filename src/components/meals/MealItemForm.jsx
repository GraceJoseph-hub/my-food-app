import React from 'react'
import Input from '../UI/Input';

const MealItemForm = () => {
  return (
    <form className="text-right">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-bg1 border border-solid border-[#8a2b06] text-light py-[0.25rem] px-[2rem] rounded-[20px] font-bold">
        + Add
      </button>
    </form>
  );
}

export default MealItemForm