import { Cart } from "../Assets/svg";
import { addItem, updateItem, getItem } from "../Store/actions/item";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "../Components";

export const toMoneyString = (value) => value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

function Card(props) {
  const {data} = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const items = useSelector(state => state.item.items);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState();
  const addingItem = () => {
    if(user.name) {
      const exist = items.filter(item => {
        return item.ProductId === data.id
      })
      if(exist.length === 0) {
        dispatch(addItem({ ProductId: data.id, total:1 })).then(() => dispatch(getItem()));
      } else {
        let total = exist[0].total+1;
        dispatch(updateItem({
          total, change:1, symbol:"+", id:exist[0].id, ProductId:data.id
        }))
        setModal("already create")
        setIsOpen(true)
        setTimeout(() => {
          setIsOpen(false)
        }, 1000);
      }
    } else {
      setIsOpen(true);
      setModal("not login")
    }
  }
  return (
    <>
    {data && 
      <div
        style={{height: "25vw", minHeight: "300px", minWidth: "200px"}}
        className="group m-auto mb-8 lg:w-5/6 relative rounded flex flex-col bg-white"
      >
        <div className="h-2/3 rounded-t duration-300">
          <img src={data.image} className="object-cover h-full" alt="card" />
        </div>
        <div className="absolute rounded duration-500 sm:group-hover:opacity-0 bg-gradient-to-t from-transparent to-gray-500 opacity-30 w-full h-full"></div>
        <div className="absolute rounded duration-300 opacity-0 sm:group-hover:opacity-40 bg-gray-600 w-full h-full"></div>
        <div className="font-open-sans text-gray-700 p-3 bg-white rounded-b">
          <div className="font-bold text-red-600 text-lg">{data.name}</div>
          <div className="text-xs">{data.category !== "sparepart" || data.category !== "accessories" ? `motor ${data.category}` : data.category}</div>
          <div></div>
          <div className="font-roboto-slab mt-3">Rp {toMoneyString(data.price)}</div>
        </div>
        <div
          onClick={addingItem}
          className="cursor-pointer">
          <Cart class={`h-8 w-8 p-1 rounded-full bg-gray-500 sm:bg-gray-600 text-white sm:hover:bg-gray-500
            absolute top-3 right-2 duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100`}
          />
        </div>
        <Modal isOpen={isOpen} setIsOpen={(state) => setIsOpen(state)}>
          {modal === "not login" && <div className="font-roboto-slab text-gray-700 my-2">Anda Belum Login</div>}
          {modal === "already create" && <div className="font-roboto-slab text-gray-700 my-2">Jumlah Barang Bertambah</div>}
        </Modal>
      </div>
    }
    </>
  )
}

export default Card;