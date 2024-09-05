import CartIcon from './CartIcon'

const CartBtn = () => {
  return (
    <button className="flex justify-around items-center rounded-[25px] font-bold border-none bg-bg3 hover:bg-bgHover active:bg-bgActive text-light py-[0.75rem] px-[3rem]">
      <span className="mr-[0.5rem] h-[1.35rem] w-[1.35rem]">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className=" py-[0.25rem] px-[1rem] rounded-[25px] ml-[1rem] font-bold bg-bg4 hover:bg-bg5 active:bg-bg5">
        0
      </span>
    </button>
  );
}

export default CartBtn