// import React from "react";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
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
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/hidden.png";
    }
  };
  const savePassword = () => {
    // console.log(form);

    setPasswordsArray([...passwordsArray, form]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordsArray, form])
    );
    console.log(...passwordsArray, form);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copytext = (text) => {
    toast.success(" Copied Succesfully 🦄", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
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
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                type="password"
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
          <h2 className="font-bold text-xl py-4">Your passwords</h2>
          {passwordsArray.length === 0 && (
            <div> No passwords to show !! Add some passwords </div>
          )}
          {passwordsArray.length != 0 && (
            <table className="table-auto w-full  rounded-md overflow-hidden">
              <thead className=" bg-red-400 text-white">
                <tr>
                  <th className="text-center min-w-32 py-2">Site</th>
                  <th className="text-center min-w-32 py-2">Username</th>
                  <th className="text-center min-w-32 py-2">Passwords</th>
                  <th className="text-center min-w-32 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-red-50">
                {passwordsArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="1 flex items-center justify-center text-center min-w-32 py-1 border border-white">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-2"
                        >
                          {item.site}
                        </a>
                        <img
                          width="20"
                          src="icons/copy.png"
                          alt="Copy"
                          className="cursor-pointer"
                          onClick={() => {
                            copytext(item.site);
                          }}
                        />
                      </td>

                      <td className="2 text-center min-w-32 py-1 border border-white">
                        {item.username}
                      </td>
                      <td className="3 text-center min-w-32 py-1 border border-white">
                        {item.password}
                      </td>
                      <td className="4 text-center min-w-32 py-1 border border-white">
                        Delete
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
