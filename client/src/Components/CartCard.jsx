import { Close } from "../Assets/svg";
import { toMoneyString } from "../Components/Card";
import { deleteItem, updateItem } from "../Store/actions/item";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";

function CartCard(props) {
  const {data} = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const subtract = () => {
    dispatch(updateItem({
      total:data.total - 1, change:1, symbol:"-", id:data.id, ProductId:data.ProductId
    }))
  }
  const add = () => {
    dispatch(updateItem({
      total:data.total + 1, change:1, symbol:"+", id:data.id, ProductId:data.ProductId
    }))
  }

  return (
    <div className="border-b-2 mt-8 border-red-600 w-full relative text-sm sm:text-base">
      <div onClick={() => setIsOpen(true)}>
        <Close class="h-4 w-4 sm:h-6 sm:w-6 absolute top-0 right-0 cursor-pointer" />
      </div>
      <div className="grid grid-cols-4 items-center">
        <img src={data && data.Product.image} className="w-24 m-auto" alt="cart" />
        <div className="m-auto">
          <div className="md:text-lg">{data.Product.name}</div>
          <div className="font-roboto-slab">Rp {toMoneyString(data.Product.price)}</div>
        </div>
        <div className="flex justify-center items-center">
          <div 
            onClick={subtract}
            className="mr-2 md:mr-4 text-lg cursor-pointer">-</div>
          <div>{data.total}</div>
          <div
            onClick={add}
            className="ml-2 md:ml-4 text-lg cursor-pointer">+</div>
        </div>
        <div className="m-auto">Rp {toMoneyString(data.Product.price * data.total)}</div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={(state) => setIsOpen(state)}>
          <div className="text-gray-800 font-roboto-slab my-4">Hapus <b>{data.Product.name}</b>?</div>
          <div className="w-full flex justify-end">
            <div
              onClick={() => {
                dispatch(deleteItem(data.id));
                setIsOpen(false)
              }}
              className="ml-auto flex py-2 px-4 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none cursor-pointer"
            >
              <div>Delete</div>
            </div>
          </div>
      </Modal>
    </div>
  )
}

export default CartCard;