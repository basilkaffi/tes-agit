import Table from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../Assets/svg"
import { useState, useEffect } from "react";
import { Footer, Modal } from "../Components";
import { InputElement, SelectElement } from "../Components/Form";
import { addProduct, updateProduct, deleteProduct, getProduct } from "../Store/actions/product";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../Store/type";

function Admin() {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [total, setTotal] = useState();
  const [dlt, setDlt] = useState();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProduct());
  },[]);

  useEffect(() => {
    if(detail) {
      setName(detail.name)
      setPrice(detail.price)
      setImage(detail.image)
      setTotal(detail.total)
      setCategory(detail.category)
    }
  }, [detail])
  
  const customStyle = {
    rows: {
      style: {
        minHeight: '56px',
      }
    },
    headCells: {
      style: {
        fontSize: "14px",
        color: "#E5E7EB",
        backgroundColor: "#374151",
        fontFamily: `'Roboto Slab', serif`,
        textTransform: "uppercase",
      }
    },
    cells: {
      style: {
        fontSize: "14px",
        color: "#374151",
        backgroundColor: "#E5E7EB",
        fontFamily: `'Roboto Slab', serif`,
      },
    },
    pagination: {
      style: {
        marginTop: "1rem",
        color: "#374151",
        backgroundColor: "#E5E7EB",
      }
    }
  }

  const column = [
    {
      name: "Id",
      selector: "id",
      minWidth: "70px",
      wrap:true,
      sortable:true
    },
    {
      name: "Nama",
      selector: "name",
      minWidth: "200px",
      wrap:true,
      sortable:true
    },
    {
      name: "Harga",
      selector: "price",
      minWidth: "150px",
      wrap:true,
      sortable:true
    },
    {
      name: "Kategori",
      selector: "category",
      minWidth: "150px",
      wrap:true,
      sortable:true
    },
    {
      name: "Kuantitas",
      selector: "total",
      minWidth: "70px",
      wrap:true,
      sortable:true
    },
    {
      name: 'Aksi',
      allowOverflow: true,
      width: "200px",
      button: true,
      cell: (row) => (
      <>
        <button
            onClick={() => {
              setDetail(row);
              setIsOpen(true);
            }}
            className="py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none mr-4"
        >Edit</button>
        <button
            onClick={() => {
              setDlt(row);
              setIsOpen(true);
            }}
            className="py-2 px-4 rounded bg-pink-600 text-white hover:bg-pink-700 focus:outline-none"
        >Hapus</button>
      </>
      )
    },
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <div className="w-4/5 flex justify-end mt-8">
      <button
        onClick={() => {
          localStorage.clear()
          dispatch({
            type:LOGIN,
            payload: {}
          })
          history.push("/")
        }}
        className={`bg-red-600 hover:text-gray-50 text-white hover:bg-red-500
        w-32 py-2 rounded duration-200 font-open-sans focus:outline-none`}
      >Logout</button>
    </div>
      <div className="w-4/5">
        <div className="flex w-full justify-end my-8">
          <div 
            onClick={() => {
              setDetail();
              setDlt();
              setIsOpen(true);
            }}
            className="ml-auto flex py-2 pr-2 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer"
          >
            <Add class={`h-6 w-6`} />
            <div>Produk</div>
          </div>
        </div>
        <Table
          noHeader
          columns={column}
          data={products}
          customStyles={customStyle}
          pagination
        />
      </div>
      <Footer/>
      <Modal isOpen={isOpen} setIsOpen={(state) => setIsOpen(state)}>
        {!dlt ?
          <div>
            <InputElement
              type="text"
              label="Name"
              placeholder="product name"
              value={name}
              setValue={(value) => setName(value)}
            />
            <InputElement
              type="text"
              label="Image URL"
              placeholder="product image url"
              value={image}
              setValue={(value) => setImage(value)}
            />
            <InputElement
              type="number"
              label="Price"
              placeholder="product price"
              value={price}
              setValue={(value) => setPrice(value)}
            />
            <InputElement
              type="number"
              label="Quantity"
              placeholder="product quantity"
              value={total}
              setValue={(value) => setTotal(value)}
            />
            <SelectElement
              label="Category"
              options={["sport", "matic", "cub", "sparepart", "accessories"]}
              value={category}
              setValue={(value) => setCategory(value)}
            />
          </div> :
          <div className="text-gray-800 font-roboto-slab">Hapus {dlt.name}?</div>
        }
        <div className="flex w-full justify-end mt-4">
        <div 
          onClick={() => {
            if(detail) {
              dispatch(updateProduct({
                name, price, category, total, image, id:detail.id
              }))
              setDetail()
            } else if(dlt) {
              dispatch(deleteProduct(dlt.id))
              setDlt()
            } else {
              dispatch(addProduct({
                name, price, category, total, image
              }))
            }
            setName()
            setPrice()
            setTotal()
            setCategory()
            setImage()
            setIsOpen(false)
          }}
          className="ml-auto flex py-2 px-4 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none cursor-pointer"
        >
          <div>{detail ? "Update" : dlt ? "Delete" : "Create"}</div>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Admin;