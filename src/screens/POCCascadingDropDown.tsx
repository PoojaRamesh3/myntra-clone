import { useState } from "react";

const Form = () => {
  const countriesData = [
    {
      name: "India",
      states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
    },
    {
      name: "Germany",
      states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
    },

    {
      name: "France",
      states: ["Auvergne", "Bretagne", "Corse", "Centre"],
    },
  ];

  const [data, setData] = useState({
    country: "India",
    state: "",
  });

  const handleCountryChange = (event: any) => {
    setData(() => ({ state: "", country: event.target.value }));
  };

  const handleStateChange = (event: any) => {
    setData((data) => ({ ...data, state: event.target.value }));
  };

  return (
    <form className="flex items-center flex-col justify-center mt-80">
      <div>
        <select
          onChange={handleCountryChange}
          className="border-2 border-black"
        >
          {countriesData.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
        <br />
        <select
          onChange={handleStateChange}
          className="border-2 border-black mt-5"
        >
          {countriesData
            .find((item) => item.name === data.country)
            ?.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default Form;
