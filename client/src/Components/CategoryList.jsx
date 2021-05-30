import Sport from "../Assets/images/sport/cbr-150.png";
import Matic from "../Assets/images/matic/vario-150.png";
import Cub from "../Assets/images/cub/supra-gtr-150.png";
import Sparepart from "../Assets/images/sparepart/shockbreaker.png";
import { useHistory } from "react-router-dom";

function Category() {
  const history = useHistory();
  const categories = [
    {
      name: "sport",
      img: Sport
    },
    {
      name: "matic",
      img: Matic
    },
    {
      name: "CUB",
      img: Cub
    },
    {
      name: "sparepart",
      img: Sparepart
    },
  ]

  const CategoryCard = ({category}) => {
    return (
      <div
        onClick={() => history.push(`/category/${category.name}`)}
        className="m-auto relative group cursor-pointer">
        <img
          src={category.img}
          alt={category.name}
          className="bg-gray-100 group-hover:bg-gray-700 group-hover:bg-opacity-30 transform duration-300"
        />
        <div
          className={`w-full font-bold mt-4 mb-8 flex justify-center font-open-sans uppercase text-gray-700 text-lg`}
        >{category.name}</div>
      </div>
    )
  }

  return (
    <div className="w-full px-6 sm:px-10 lg:px-14">
      <div className="text-center font-roboto-slab text-lg font-bold text-red-600 pt-20 pb-12">SHOP BY CATEGORY</div>
      <div className="grid grid-cols-1 gap-20 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4">
        {
          categories.map((category) => (
            <CategoryCard category={category} />
          ))  
        }
      </div>
    </div>
  )
}

export default Category;