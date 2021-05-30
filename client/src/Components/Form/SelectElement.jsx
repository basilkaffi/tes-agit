function SelectElement(props) {
  const { label, options, value, setValue } = props;
  return (
    <div className="flex flex-col mt-2 w-full">
      <label className="text-gray-700 font-sans mb-1">{label}</label>
      <select
        className="focus:outline-none py-3 px-2 font-roboto-slab font-light text-sm rounded-md bg-gray-50 mt-1"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      >
        <option value={null}>--{label}--</option>
        {options.map((option, idx) => (
          <option
            className="text-gray-800 font-roboto-slab font-light text-sm" 
            value={option} key={idx}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectElement;