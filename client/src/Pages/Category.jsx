import {Navbar, CategoryBanner, Catalog, Footer} from "../Components";
import { useParams } from "react-router-dom";
function Category() {
  const {category} = useParams();
  return (
    <div>
      <Navbar/>
      <CategoryBanner/>
      <Catalog dark={false} title={`${category} products`}/>
      <Footer/>
    </div>
  )
}

export default Category;