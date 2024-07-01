import Card from "./Card";
import { GiCarWheel } from "react-icons/gi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
const App = () => {
  const [parking, setParking] = useState([0, 0, 0, 0, 0, 0]);

  const fetchLatestData = () => {
    fetch(
      "https://api.thingspeak.com/channels/2096352/feeds.json?api_key=6SS4OPR0RVFN9Y35&results=2"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newData = [
          Number(data.feeds[1].field1),
          Number(data.feeds[1].field2),
          Number(data.feeds[1].field3),
          Number(data.feeds[1].field4),
          0,
          0,
        ];
        setParking(newData);
      })
      .catch((e) => e);
  };

  useEffect(() => {
    fetchLatestData();
  }, []);

  return (
    <div>
      <nav className="bg-gradient-to-r from-violet-700 via-indigo-300 to-violet-700   py-2 px-0 shadow-lg shadow-violet-400/60">
        <div className="flex  justify-center ">
          <div className="mt-2 mb-1 text-2xl">
            <GiCarWheel />
          </div>
          <div className="font-bold text-2xl px-3">Smart Parking System</div>
        </div>
      </nav>
      <div className="bg-[url('./Images/background.jpg')] relative bg-fixed bg-center bg-cover bg-no-repeat ">
        <div className=" m-auto py-9">
          <div className="grid grid-cols-6 lg:w-4/5 mx-auto">
            {parking.map((e, i) => {
              return <Card id={i + 1} flag={e} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-gradient-to-r from-violet-700 via-indigo-300 to-violet-700   text-white py-5 px-3 ">
          <div className="flex gap-5">
            <div>copyrights 2023</div>
            <div className="mt-1">
              <BsFacebook />
            </div>
            <div className="mt-1">
              <BsInstagram />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default App;
