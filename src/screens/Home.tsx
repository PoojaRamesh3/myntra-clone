import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { updateColor, updateTheme } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const initialTheme = useSelector((state: any) => state.theme);
  const background = useSelector((state: any) => state.color.background);
  const color = useSelector((state: any) => state.color.textcolor);

  const changeFunction = () => {
    if (initialTheme === "dark") {
      dispatch(updateColor("light"));
      dispatch(updateTheme("light"));
    } else {
      dispatch(updateColor("dark"));
      dispatch(updateTheme("dark"));
    }
  };

  return (
    <div
      className={`mt-28 flex items-center justify-center cursor-pointer w-full min-h-screen ${background}`}
    >
      {initialTheme === "light" ? (
        <FaSun
          style={{ width: "30px", height: "30px" }}
          onClick={() => changeFunction()}
          className={`${color}`}
        />
      ) : (
        <FaMoon
          style={{ width: "25px", height: "25px" }}
          onClick={() => changeFunction()}
          className={`${color}`}
        />
      )}
    </div>
  );
};

export default Home;
