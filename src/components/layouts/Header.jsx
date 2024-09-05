import React from 'react'
import CartBtn from '../cart/CartBtn';
import meals from '../../assets/meals.jpg'

const Header = () => {
  return (
    <>
      <header className="fixed flex justify-between items-center px-[10%] top-0 left-0 w-full h-[5rem] bg-bg1 text-white shadow-bxshadow1 z-10">
        <h1>ReactMeals</h1>
        <CartBtn />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img
          src={meals}
          alt="A table full of delicious food"
          className="w-[110%] h-full object-cover"
        />
      </div>
    </>
  );
}

export default Header