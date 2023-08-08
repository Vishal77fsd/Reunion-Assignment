import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import constantData from "./Constants/data";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(constantData);
    console.log(data);
  }, [data]);

  return (
    <div className="font-inter">
      <Navbar />
      <Home data={data} />
    </div>
  );
};

export default App;
