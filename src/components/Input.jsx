import React from "react";

function Input({ handlechange, handleclick }) {
  return (
    <div className="flex justify-center my-4">
      <input
        className="font-serif h-10 rounded-3xl pl-4 lg:w-72 lg:h-10 text-black bg-transparent border-2 border-[#686868]"
        type="text"
        onChange={handlechange}
        placeholder="Enter city"
      />
      <button
        className=" px-5 py-1 ml-2 rounded-3xl text-sm border-2 border-[#686868]"
        onClick={handleclick}
      >
        Search
      </button>
    </div>
  );
}

export default Input;
