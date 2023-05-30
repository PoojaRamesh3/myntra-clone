import { useState } from "react";

const Home = () => {
  const [openTab, setOpenTab] = useState(1);
  const [container, setContainer] = useState({
    username: "",
    age: 45,
  });
  console.log(container.username);
  const handleChange = (event: any) => {
    setContainer({
      ...container,
      [event.target.name]: event.target.value,
    });
  };

  const tabNextHandler = (openTab: any) => {
    openTab < 3 && openTab > 0 && setOpenTab(openTab + 1);
  };

  const tabPreHandler = (openTab: any) => {
    openTab > 1 && setOpenTab(openTab - 1);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "bg-red-500 text-white" : "text-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "bg-red-500 text-white" : "text-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3 ? "bg-red-500 text-white" : "text-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded pb-5">
            <div className="px-4 py-5 flex-auto justify-center flex">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Full Name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="Pooja R"
                        value={container.username}
                        onChange={(event) => handleChange(event)}
                        name="username"
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="email"
                        placeholder="pooja.r@gmail.com"
                        name="username"
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Phone No.
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={() => tabPreHandler(openTab)}
              >
                Prev
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => tabNextHandler(openTab)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
