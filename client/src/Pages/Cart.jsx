import { Navbar, CategoryBanner, CartCard, Footer, Modal } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { toMoneyString } from "../Components/Card";
import { useMemo, useState } from "react";
import { bulkDeleteItem } from "../Store/actions/item";

function Cart() {
  const items = useSelector(state => state.item.items);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const total = useMemo(() => {
    let total = 0;
    for(let item of items) {
      total += item.Product.price*item.total
    }
    return total;
  }, [items])
  return (
    <div>
      <Navbar/>
      <CategoryBanner/>
      <div className="grid grid-cols-3 gap-12 px-6 sm:px-10 lg:px-14 font-roboto-slab text-red-600">
        <div className="col-span-3 lg:col-span-2 w-full">
          <div className="text-lg font-bold mt-16 pt-8 pb-12">SHOPPING CART</div>
          <div className="w-full">
            <div className="grid grid-cols-4 text-center text-sm sm:text-base">
              <div>Item</div>
              <div>Description</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            {items.length > 0 && items.map((item, idx) => (
              <CartCard data={item} key={idx} />
            ))}
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="text-lg font-bold sm:mt-16 pt-8 pb-12">ORDER SUMMARY</div>
          <div>
            <div className="grid grid-cols-5 text-center text-sm sm:text-base">
              <div className="col-span-2">Item</div>
              <div className="col-span-1">Quantity</div>
              <div className="col-span-2">Total</div>
            </div>
            <div style={{minHeight: "320px"}}>
            {items.map(item => (
                <div  className="mt-12 w-full">
                  <div className="w-full grid grid-cols-5 text-center">
                    <div className="col-span-2 text-left m-auto">
                      <div>{item.Product.name}</div>
                      <div>Rp {toMoneyString(item.Product.price)}</div>
                    </div>
                    <div className="col-span-1">x{item.total}</div>
                    <div className="col-span-2">Rp {toMoneyString(item.Product.price * item.total)}</div>
                  </div>
                </div>
            ))}
            </div>
            <div className="border-t-2 border-red-600 grid grid-cols-5 text-center">
              <div className="col-span-3 text-left m-6">Total</div>
              <div className="col-span-2 mt-6">Rp {toMoneyString(total)}</div>
            </div>
          </div>
          <div className="w-full flex mt-12">
            <button
              onClick={() => {
                setIsOpen(true)
              }}
              className="ml-auto bg-red-600 hover:bg-red-500 text-white focus:outline-none transform duration-200 py-2 w-24 rounded"
            >Beli</button>
          </div>
        </div>
      </div>
      <Footer />
      <Modal isOpen={isOpen} setIsOpen={(state) => setIsOpen(state)}>
        <div>
          <div className="text-gray-800 font-roboto-slab my-4">Beli semua barang?</div>
          <div className="flex w-full justify-end">
            <div 
              onClick={() => {
                dispatch(bulkDeleteItem());
                setIsOpen(false)
              }}
              className="ml-auto flex py-2 px-4 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer"
            >Buy</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Cart;