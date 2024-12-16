// import React from "react";

const Manager = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(70%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(262,205,258,.5)_100%)]"></div>

      <div className=" bg-red-200 mx-auto mycontainer  my-2 ">
        <h1>Pass-OP </h1>
        <p>Your own password manager</p>
        <div className="text-black flex flex-col py-6 ">
          <input type="text" name="" className="rounded-full" />
          <div className="flex">
            <input type="text" className="m-2 rounded-full" />
            <input type="text" className="m-2 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
