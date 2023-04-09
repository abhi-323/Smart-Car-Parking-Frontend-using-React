const Card = ({ id, flag }) => {
  const park = () => {
    const res = fetch(
      `https://api.thingspeak.com/update?api_key=MVWEGW2JVVF0KYJ1&field${id}=${
        1 - flag
      }`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      className={`col-span-6 sm:col-span-3 lg:col-span-2  py-4 px-5 opacity-90 border m-3 border-indigo-500 rounded-md  bg-white font-mono text-center ${
        flag === 1 && "opacity-50 "
      }`}
    >
      <h1 className="font-bold pb-2 uppercase">Slot {id}</h1>
      <div>
        <img
          src={require("/home/aman/Personal/reactjs/parking/src/Images/pic2.png")}
          className="w-32 h-32 mx-auto"
        ></img>
      </div>
      <div className="flex mt-4 gap-2">
        <div
          className={`border border-solid rounded-md py-1 px-1 w-1/2 ${
            flag
              ? "bg-red-300 text-red-600 border-red-600"
              : " text-gray-600 border-gray-600"
          }`}
        >
          Occupied
        </div>
        <div
          className={`border rounded-md py-1 px-1 w-1/2 ${
            flag
              ? "text-gray-600 border-gray-600"
              : "bg-green-300/80 text-green-700 border-green-700"
          }`}
        >
          Empty
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();

          park();
        }}
        className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-400  px-9 py-1 mt-3 rounded-sm text-white font-mono font-bold  shadow-md shadow-green-400/60 opacity-100"
      >
        {flag === 1 ? "Release" : "Park"}
      </button>
    </div>
  );
};
export default Card;
