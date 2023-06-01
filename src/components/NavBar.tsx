import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { content } from "../content";

const NavBar = () => {
  return (
    <nav className={`px-5 fixed top-0 right-0 w-full z-10 shadow-lg`}>
      <div className={`flex justify-between`}>
        <div className={`flex basis-1/2 items-center`}>
          <Link to="/">
            <img
              src={content.navbar.logo}
              alt="Myntra"
              className={`h-6 pr-3`}
            />
          </Link>
          <ul className={`flex`}>
            {content.navbar.leftmenuitems.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.tag === "NEW" ? "relative" : ""
                } hover:border-b-pink-500 border-y-4 border-white`}
              >
                <div
                  className={`absolute bottom-10 left-[68px] text-xs w-fit font-bold text-pink-500`}
                >
                  {item.tag}
                </div>
                <Link to={item.url} className={`font-semibold px-3 py-7 block`}>
                  {item.listname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`flex basis-1/2`}>
          <label
            className={`bg-slate-100 text-slate-500 flex items-center px-3 my-6`}
          >
            <AiOutlineSearch style={{ width: "20px", height: "20px" }} />
          </label>
          <input
            className={`w-full bg-slate-100 focus-visible:outline-none px-3 my-6 block`}
            type="text"
            placeholder="Search for products, brands and more"
          />
          <ul className={`flex`}>
            {content.navbar.rightmenuitems.map((item, index) => (
              <li
                key={index}
                className={`hover:border-b-pink-500 border-y-4 border-white`}
              >
                <Link to={item.url} className={`font-semibold px-3 py-4 block`}>
                  <div className={`flex flex-col items-center`}>
                    {item.icon}
                    {item.listname}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
