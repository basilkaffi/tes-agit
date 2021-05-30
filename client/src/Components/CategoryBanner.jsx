import Image1 from "../Assets/images/sport/cbr-150.png";
import Image2 from "../Assets/images/matic/vario-150.png";
import Image3 from "../Assets/images/cub/supra-gtr-150.png";
import Image4 from "../Assets/images/sparepart/shockbreaker.png";
import Image5 from "../Assets/images/accesories/visor.jpg";
import Image6 from "../Assets/images/cart.jpg";
import { useParams } from "react-router-dom";

function CategoryBanner() {
  const { category } = useParams();
  return (
    <div className="w-full overflow-hidden hide-scroll relative" id="category-banner">
      <div className="flex justify-center">
        <img src={
          category === "sport" ? Image1 :
          category === "matic" ? Image2 :
          category === "cub" ? Image3 :
          category === "sparepart" ? Image4 :
          category === "accessories" ? Image5 : Image6
        } className="h-screen object-cover" alt="banner 1" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-center">
        <p 
          style={{textShadow: "0 0 8px #11182777", letterSpacing: "1rem"}}
          className="font-roboto-slab text-white text-2xl sm:text-5xl">{
            !category ? "Cart" : category === "sparepart" || category === "accessories"
            ? `${category}` : `Motor ${category}`
          }</p>
      </div>
    </div>
  )
}

export default CategoryBanner;