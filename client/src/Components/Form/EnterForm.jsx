import { useState } from "react";
import User from "../Navbar/User";
import InputElement from "./InputElement";
import { useHistory } from "react-router-dom";
import Image from "../../Assets/images/cbr-3.jpg";
import { login, register } from "../../Store/actions/user";
import { useDispatch } from "react-redux";
import Modal from "../Modal";

function Enter(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { title } = props;

  const submitData = () => {
    if(title === "Login") {
      const data = { name, email, password, role: ""};
      data.role = admin ? "admin" : "user";
      dispatch(login(data)).then((resp) => {
        history.push(`/${admin ? "admin" : ""}`)
      })
    } else {
      const data = { name, email, password };
      console.log(data);
      dispatch(register(data)).then((resp) => {
        setIsOpen(true);
      })
    }
  }
  
  return (
    <div className="w-full h-screen flex justify-center">
      <img src={Image} alt="cover" className="h-screen object-cover" />
      <div className="absolute top-0 opacity-20 bg-gray-900 w-full h-full"></div>
      <div className="absolute top-0 bg-gradient-to-t from-transparent to-gray-500 opacity-30 w-full h-full"></div>
      <div className="absolute top-3 right-1 sm:top-8 sm:right-8">
        {title === "Login" && 
          <User
            buttons={["Admin", "User"]}
            clicked={(clicked) => { clicked === "Admin" ? setAdmin(true) : setAdmin(false); }}
          />
        }
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-80">
        <div className="text-white text-opacity-90 font-roboto-slab text-3xl mb-6">{title} {title !== "Register" ? admin ? "Admin" : "User" : null}</div>
        {title === "Register" && 
          <InputElement
            placeholder="your username"
            type="text"
            value={name}
            setValue={(value) => setName(value)}
            style="enter"
          />
        }
        <InputElement
          placeholder="your email address"
          type="email"
          value={email}
          setValue={(value) => setEmail(value)}
          style="enter"
        />
        <InputElement
          placeholder="your password"
          type="password"
          value={password}
          setValue={(value) => setPassword(value)}
          style="enter"
        />
        <div className="w-full flex justify-end mt-4">
          <button
            onClick={submitData}
            className={`bg-red-600 hover:bg-gray-50 text-white hover:text-red-600
            w-32 py-2 rounded duration-200 font-open-sans focus:outline-none`}
          >{`${title === "Login" ? "Masuk" : "Daftar"}`}</button>
        </div>
        <div className="w-full flex justify-center mt-2 text-white">
          <p>{`${title === "Login" ? "Belum memiliki akun? silahkan daftar " : "Sudah memiliki akun? silahkan masuk "}`}
            <span
              onClick={() => history.push(`/${title === "Login" ? "register" : "login"}`)}
              className="text-indigo-400 cursor-pointer"
            >disini</span>
          </p>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={(state) => setIsOpen(state)}>
        <div className="flex w-full justify-center">
          <div className="my-4 w-72">Registrasi anda telah berhasil, silahkan login{" "}
            <span
              onClick={() => history.push("/login")}
              className="cursor-pointer text-indigo-600"
            >disini</span>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Enter;