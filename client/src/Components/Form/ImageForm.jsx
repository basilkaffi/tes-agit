import { useState, useRef } from "react";
import { Camera } from "../../Assets/svg";

function ImageForm(props) {
  const { url, setValue } = props;
  const [imagePreview, setImagePreview] = useState();
  const inputEl = useRef();

  const handleFile = (e) => {
    e.preventDefault();
    setValue(e.target.files[0]);
    if(e.target.files.length !== 0) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <div className="max-w-max relative">
        { (imagePreview || url) ? 
          <>
            <div className="h-32 w-32 rounded-md">
              <img
                className="rounded-md w-full h-full object-cover"
                src={imagePreview || url}
                alt="gambar profil atau logo"
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                inputEl.current.click();
              }}
            >
              <Camera class="h-9 w-9 p-1 m-0.5 duration-200 text-gray-100 hover:text-white bg-gray-400 hover:bg-gray-300 rounded-md absolute bottom-0 right-0 cursor-pointer" />
            </div>
          </>:
          <div
            onClick={(e) => {
              e.preventDefault();
              inputEl.current.click();
            }}
          >
            <Camera class="h-32 w-32 p-12 duration-200 text-gray-100 hover:text-white bg-gray-400 hover:bg-gray-300 rounded-md cursor-pointer" />
          </div>
        }
      </div>
      <input
        type="file"
        onChange={handleFile}
        className="hidden"
        ref={inputEl}
      />
    </>
  )
}

export default ImageForm;