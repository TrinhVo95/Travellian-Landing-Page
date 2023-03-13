import Banner from "../Banner";
import Navbar from "../Navbar";
const index = () => {
  return (
    <div className="bg-banner bg-cover bg-no-repeat bg-center sm:h-screen">
      <div className="bg-gradient-to-b from-gray-900/100 to-black/0">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default index;
