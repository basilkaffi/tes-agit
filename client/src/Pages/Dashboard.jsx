import { Navbar, Banner, CategoryList, Footer, Catalog } from "../Components";

function Dashboard() {
  return (
    <div id="dashboard">
      <Navbar/>
      <Banner/>
      <CategoryList/>
      <Catalog dark={true} title={`product`}/>
      <Footer/>
    </div>
  )
}

export default Dashboard;