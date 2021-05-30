import { useEffect, useState } from "react";
import Logo from "../../Assets/images/honda-logo.png";
import Logo1 from "../../Assets/images/honda-logo1.png";
import { useHistory } from "react-router-dom";
import Cart from "./Cart";
import User from "./User";
import Burger from "./Burger";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN, DELETE_BULK_ITEM } from "../../Store/type";

function Navbar() {

  const history = useHistory();
  const dispatch = useDispatch();
  const navItem = ["sport", "matic", "cub", "sparepart", "accessories"];
  const [selectedButton, setSelectedButton] = useState("");
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if(selectedButton === "Logout") {
      localStorage.clear();
      dispatch({
        type:LOGIN,
        payload: {}
      })
      dispatch({
        type: DELETE_BULK_ITEM,
        payload: null
      })
    } else if(selectedButton === "Register" || selectedButton === "Login"){
      history.push(`/${selectedButton.toLowerCase()}`);
    } else if(selectedButton === "sport"
      || selectedButton === "matic"
      || selectedButton === "cub"
      || selectedButton === "sparepart"
      || selectedButton === "accessories") {
      history.push(`/category/${selectedButton}`);
    }
  }, [selectedButton]);

  useEffect(() => {
    const banner = document.getElementById("banner");
    const cBanner = document.getElementById("category-banner");
    const navbar = document.getElementById("navbar");
    if(navbar && banner) {
      const customNav = () => {
        if(banner.getBoundingClientRect().top < 0) {
          navbar.classList.add("-translate-y-40", "bg-opacity-30");
          navbar.classList.remove("bg-opacity-50");
        } else {
          setTimeout(() => {
            navbar.classList.remove("-translate-y-40", "bg-opacity-30");
            navbar.classList.add("bg-opacity-50");
          }, 400);
        }
        if(banner.getBoundingClientRect().bottom < window.innerHeight) {
          setTimeout(() => {
            navbar.classList.remove("-translate-y-40");
          }, 400);
        }
      }
      window.addEventListener("scroll", customNav);
    }
    if(navbar && cBanner) {
      const customNav = () => {
        if(cBanner.getBoundingClientRect().top < 0) {
          navbar.classList.add("-translate-y-40", "bg-opacity-30");
          navbar.classList.remove("bg-opacity-50");
        } else {
          setTimeout(() => {
            navbar.classList.remove("-translate-y-40", "bg-opacity-30");
            navbar.classList.add("bg-opacity-50");
          }, 400);
        }
        if(cBanner.getBoundingClientRect().bottom < window.innerHeight) {
          setTimeout(() => {
            navbar.classList.remove("-translate-y-40");
          }, 400);
        }
      }
      window.addEventListener("scroll", customNav);
    }
  },[]);

  return (
    <div
      id="navbar"
      className={`bg-white text-red-600 flex fixed w-full backdrop-filter bg-opacity-50
      backdrop-blur transform duration-300 z-20 top-0 items-center py-2 sm:py-4 px-6 sm:px-10 lg:px-14`}
    >
      <div onClick={() => history.push("/")} className="cursor-pointer">
        <img src={Logo} alt="logo honda" className="w-12 h-auto block sm:hidden" />
        <img src={Logo1} alt="logo honda" className="w-48 h-auto hidden sm:block transform -translate-y-1" />
      </div>
      <ul className="font-open-sans font-bold ml-12 hidden w-96 lg:flex justify-between">
        {navItem.map((category, idx) => (
          <li
            key={idx}
            onClick={() => history.push(`/category/${category}`)}
            className="hover:text-red-400 font-open-sans cursor-pointer uppercase"
          >{category}</li>
        ))}
      </ul>
      <div className="flex items-center ml-auto">
        <Burger buttons={navItem} clicked={(selectedButton) => setSelectedButton(selectedButton)} />
        <Cart />
        <User buttons={user.name ? ["Logout"] : ["Register", "Login"]} clicked={(selectedButton) => setSelectedButton(selectedButton)} />
      </div>
    </div>
  )
}

export default Navbar;