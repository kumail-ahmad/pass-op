// import React from "react";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
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
    if (
      form.site.length > 2 &&
      form.username.length > 2 &&
      form.password.length > 2
    ) {
      setPasswordsArray([...passwordsArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }])
      );
      console.log([...passwordsArray, { ...form, id: uuidv4() }]);
      setform({ site: "", username: "", password: "" });
      toast.success("Password Saved 🦄", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Error: Password Not saved", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const deletePassword = (id) => {
    let resp = confirm("Are you sure , to delete the password");
    if (resp) {
      setPasswordsArray(passwordsArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordsArray.filter((item) => item.id !== id))
      ),
        toast.success("Password deleted successfully 🦄", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  };

  const editPassword = (id) => {
    setform(passwordsArray.filter((i) => i.id === id)[0]);
    setPasswordsArray(passwordsArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copytext = (text) => {
    toast.success(" Copied Succesfully 🦄", {
      position: "top-right",
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
      <div className="absolute top-0 z-[-2] h-[50vh] w-[50vw] rotate-180 transform bg-white bg-[radial-gradient(70%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(262,205,258,.5)_100%)]"></div>

      <div className=" bg-red-100 mx-auto mycontainer p-2 md:p-0 my-2 ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-red-800">&lt;</span>
          <span>Pass</span>
          <span className="text-red-800">OP /&gt;</span>
        </h1>
        <p className="text-red-700 text-lg font-bold text-center">
          Your own password manager
        </p>
        <div className="flex flex-col gap-4 sm:flex-col md:flex-row md:gap-2 w-full justify-center items-center">
          <div className="flex flex-col gap-4 w-full items-center">
            {/* Website URL Input */}
            <div className="w-full">
              <input
                value={form.site}
                onChange={handleChange}
                type="text"
                name="site"
                placeholder="Enter Website URL"
                id="site"
                className="border border-red-400 rounded-full px-4 py-2 w-full"
              />
            </div>

            {/* Username and Password Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <input
                value={form.username}
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Enter Name"
                id="username"
                className="border border-red-400 rounded-full px-4 py-2 w-full"
              />

              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  id="password"
                  className="border border-red-400 rounded-full px-4 py-2 w-full"
                />
                <span className="absolute right-3 top-3.5">
                  <img
                    ref={ref}
                    onClick={showPassword}
                    className="cursor-pointer"
                    width="22"
                    src="/icons/eye.png"
                    alt="Toggle Visibility"
                  />
                </span>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="flex rounded-full border bg-red-400 border-red-500 min-w-fit justify-center items-center py-1 px-3 hover:bg-red-300 gap-2 m-3"
            >
              <lord-icon
                src="https://cdn.lordicon.com/sbnjyzil.json"
                trigger="hover"
              ></lord-icon>
              Add Password.
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your passwords</h2>
          {passwordsArray.length === 0 && (
            <div>No passwords to show! Add some passwords.</div>
          )}
          {passwordsArray.length !== 0 && (
            <div className="overflow-x-auto w-full">
              <table className="table-auto w-full border-collapse border border-red-400 rounded-lg">
                <thead className="bg-red-400 text-white  rounded-t-lg">
                  <tr>
                    <th className="text-center px-4 py-2">Site</th>
                    <th className="text-center px-4 py-2">Username</th>
                    <th className="text-center px-4 py-2">Passwords</th>
                    <th className="text-center px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-red-50 rounded-b-lg">
                  {passwordsArray.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center px-2 py-1 border items-end gap-3 flex">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block truncate max-w-xs"
                        >
                          {item.site}
                        </a>
                        <img
                          width="20"
                          src="icons/copy.png"
                          alt="Copy"
                          className="cursor-pointer ml-2"
                          onClick={() => copytext(item.site)}
                        />
                      </td>
                      <td className="text-center px-2 py-1 border">
                        {item.username}
                      </td>
                      <td className="text-center px-2 py-1 border">
                        {item.password}
                      </td>
                      <td className="text-center px-2 py-1 border ">
                        <span onClick={() => editPassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            state="hover-line"
                            colors="primary:#242424,secondary:#e83a30"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span onClick={() => deletePassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/hwjcdycb.json"
                            trigger="hover"
                            colors="primary:#242424,secondary:#e83a30"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
