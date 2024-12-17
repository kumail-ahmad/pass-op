// import React from "react";

import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordsArray, setPasswordsArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    // let passwordArray;
    if (passwords) {
      setPasswordsArray(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    // alert("password was shown");
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/hidden.png";
    }
  };
  const savePassword = () => {
    // console.log(form);
    setPasswordsArray([...passwordsArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordsArray, form]));
    console.log(...passwordsArray, form);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

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
            value={form.site}
            onChange={handleChange}
            type="text"
            name="site"
            placeholder="Enter Website URL"
            className="border border-red-400  m-2 rounded-full w-full px-4 py-1"
          />
          <div className="flex w-full justify-between gap-5">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter Name"
              className="border border-red-400  m-2 w-full rounded-full px-4 py-1"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Enter Password"
                className="border  border-red-400 m-2 w-full rounded-full px-4 py-1"
              />
              <span className="absolute right-0.5 top-3.5">
                {" "}
                <img
                  ref={ref}
                  onClick={showPassword}
                  className="cursor-pointer"
                  width="22"
                  src="/icons/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex rounded-full border bg-red-400 border-red-500 w-fit justify-center items-center py-1 px-3 hover:bg-red-300 gap-2 m-3"
          >
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2>Your passwords</h2>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones </td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;
