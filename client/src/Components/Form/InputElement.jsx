import { useState } from "react";
import { EyeOpen, EyeClose } from "../../Assets/svg";

function InputElement (props) {
  const { type, placeholder, value, setValue, style, label } = props;
  const [typeLocal, setType] = useState("password");

  return (
    <div className="flex flex-col mt-2 w-full">
      {style !== "enter" && <label className="text-gray-700 font-sans mb-1">{label}</label>}
      <div className={`${style === "enter" ? "bg-gray-500 bg-opacity-60" : "bg-white"} flex items-center rounded-md`}>
        <input
          type={type === "password" ? typeLocal : type}
          value={value}
          className={`${type !== "password" ? "w-full" : "w-11/12"} focus:outline-none p-4 font-open-sans 
          ${style === "enter" ? "text-gray-50 placeholder-gray-300" : "text-gray-700 placeholder-gray-500"} 
          font-light text-sm rounded-md bg-transparent mt-1`}
          placeholder={placeholder}
          onChange={(e) => {
            if(setValue) {
              setValue(e.target.value)
            }
          }}
        />
        {type === "password" && (
          <div
            className="cursor-pointer w-1/12"
            onClick={() => {
              typeLocal === "password" ? setType("text") : setType("password")
            }}
          >{ typeLocal === "password"
            ? <EyeOpen class="h-5 w-5 text-white text-opacity-90" />
            : <EyeClose class="h-5 w-5 text-white text-opacity-90" />
          }</div>
        )}
      </div>
    </div>
  )
}

export default InputElement;