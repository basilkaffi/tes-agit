import { Card } from ".";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Catalog(props) {
  const {dark, title} = props;
  const products = useSelector((state) => state.product.products);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    if(title !== "product") {
      const productByCategory = products.filter(product => {
        return product.category === title.split(" ")[0]
      });
      setSelectedProduct(productByCategory);
    } else if(products.length > 0){
      const limit = products.length - 1;
      let arr = []
      for(let i = limit; i > limit-8; i--) {
        arr.push(products[i])
      }
      setSelectedProduct(arr);
    }
  }, [title, products]);

  return (
    <div className={`${dark ? "bg-gray-100" : "bg-white"} px-6 sm:px-10 lg:px-14`}>
      <div className="text-center font-roboto-slab text-lg font-bold text-red-600 mt-16 pt-8 pb-12">{`${title.toUpperCase()}`}</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {selectedProduct.length > 0 &&
          selectedProduct.map((product, idx) => (
            <Card data={product} key={idx} />
          ))
        }
      </div>
    </div>
  )
}

export default Catalog