import { Cart } from "../../Assets/svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function CartItem() {
  const history = useHistory();
  const items = useSelector((state) => state.item.items);
  return (
    <div
      onClick={() => history.push("/cart")}
      className="relative mr-4 sm:mr-6 md:mr-8 cursor-pointer group"
    >
      <Cart class="h-8 w-8 p-1 text-white rounded-full bg-red-600 group-hover:bg-red-400 duration-200" />
      <div 
        className={`w-4 h-4 text-white rounded-full bg-green-500 group-hover:bg-green-400 text-center font-open-sans
        absolute right-0 top-0 text-xs transform translate-x-1 -translate-y-1 duration-200`}
      >{items.length}</div>
    </div>
  )
}

export default CartItem;