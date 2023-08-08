/* eslint-disable react/prop-types */
import currencyFormatter from "currency-formatter";
import { CiLocationOn } from "react-icons/ci";

const Home = ({ data }) => {
  return (
    <div>
      {data.length === 0 && (
        <div className="text-2xl text-center bg-[#E2E8F0] w-[90%] m-auto p-4">
          Search Result Here
        </div>
      )}
      <div className="w-[90%] bg-slate-200 rounded-sm p-6 m-auto flex flex-wrap gap-6 justify-center">
        {data.map((data, index) => (
          <div
            key={index}
            className="border border-red-200 w-[30%] rounded-md overflow-clip"
          >
            <div>
              <img
                src={data.img}
                alt="img"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="p-2">
              <div className="text-1xl font-semibold">{data.title}</div>
              <div className="text-slate-500 text-[12px] flex items-center">
                <CiLocationOn className="text-[12px]" />
                <div className="break-words">{data.address}</div>
              </div>
              <div className="text-slate-700">
                {currencyFormatter.format(data.rent, { locale: "en-IN" })}
              </div>
              <ul className="">
                {data.accomodations.map((element, index) => (
                  <li
                    className="border text-[10px] mr-2 inline p-1 rounded-md bg-blue-300 text-black "
                    key={index}
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
