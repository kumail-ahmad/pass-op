// import React from "react";

const Manager = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(70%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(262,205,258,.5)_100%)]"></div>

      <div className=" bg-red-100 mx-auto mycontainer  my-2 ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-red-800">&lt;</span>
          <span>Pass</span>
          <span className="text-red-800">OP /&gt;</span>
        </h1>
        <p className="text-red-700 text-lg font-bold text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col py-6 items-center">
          <input
            type="text"
            placeholder="Enter Website URL"
            className="border border-red-400  m-2 rounded-full w-full px-4 py-1"
          />
          <div className="flex w-full justify-between gap-5">
            <input
              type="text"
              placeholder="Enter Name"
              className="border border-red-400  m-2 w-full rounded-full px-4 py-1"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Password"
                className="border  border-red-400 m-2 w-full rounded-full px-4 py-1"
              />
              <span className="absolute right-0.5 top-3.5"> <img className="cursor-pointer"width="22" src="/icons/eye.png" alt="" /></span>
            </div>
          </div>
          <button className="flex rounded-full border bg-red-400 border-red-500 w-fit justify-center items-center py-1 px-3 hover:bg-red-300 gap-2 m-3">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
