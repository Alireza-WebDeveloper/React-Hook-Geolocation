import useGeoLocation from '../../Hook/useGeoLocation';
const HomePage = () => {
  // Custom Hook useGeoLocation
  const { error, handleGetPosition, load, post, countClick } = useGeoLocation();
  // Error Message
  if (error) return <>{error}</>;
  // Return JSX
  return (
    <div className="flex flex-row items-center gap-5 mx-auto container m-2">
      {/* Button To Click Request */}
      <button
        onClick={handleGetPosition}
        className="px-4  text-xl hover:bg-orange-500 transition-all ease-in-out duration-150 py-2 rounded-lg bg-orange-400 capitalize"
      >
        click to get location
      </button>
      {/* Render Post Lat , long */}
      <p className="p-2 rounded-lg bg-gray-200">
        {load
          ? 'wait to get position...'
          : post.lat || post.long
          ? `location : lat : ${post.lat}- long : ${post.long}`
          : 'no set location'}
      </p>
      <p>your requested time {countClick}</p>
    </div>
  );
};

export default HomePage;
