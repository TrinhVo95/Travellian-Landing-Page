import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Title = () => {
  return (
    <>
      <div className="mb-20">
        <h2 className="text-5xl text-black">Popular Destinations</h2>
        <div className=" border-b-4 border-orange-400 sm:w-[330px]"></div>
        <p className="text-gray-300 mt-4 text-lg md:text-2xl">
          Most popular destinations around the world, from historical places to
          natural wonders.
        </p>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative pb-4">
            <img
              className="w-full rounded-lg h-[400px] object-cover"
              src="https://image-tc.galaxy.tf/wijpeg-1z9k3uktri42hnw22ztom9pk9/destination-3-landmarks-and-sightseeing_standard.jpg?crop=127%2C0%2C1667%2C1250"
              alt=""
            />
            <div className="absolute bottom-10 left-10 text-lg text-white">
              <h5>Monument of Berlin</h5>
              <div className="flex items-center">
                <CiLocationOn />
                <p>Berlin, Germany</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative pb-4">
            <img
              className="w-full rounded-lg h-[400px] object-cover"
              src="https://cdn.ca.emap.com/wp-content/uploads/sites/9/2021/12/millennium-bridge.jpg"
              alt=""
            />
            <div className="absolute bottom-10 left-10 text-lg text-white">
              <h5>Millennium Bridge</h5>
              <div className="flex items-center">
                <CiLocationOn />
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative pb-4">
            <img
              className="w-full rounded-lg h-[400px] object-cover"
              src="https://youimg1.tripcdn.com/target/10091f000001gsomb2058.jpg?proc=source%2Ftrip"
              alt=""
            />
            <div className="absolute bottom-10 left-10 text-lg text-white">
              <h5>Rialto Bridge</h5>
              <div className="flex items-center">
                <CiLocationOn />
                <p>Venice, Italy</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative pb-4">
            <img
              className="w-full rounded-lg  h-[400px] object-cover"
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/storyblocks-lisbon-alfama-district-with-orange-roof-tiles-and-white-walls-portugal_SlEdMToV7_SB_PM.jpg"
              alt=""
            />
            <div className="absolute bottom-10 left-10 text-lg text-white">
              <h5>Sea of Orange Tiles</h5>
              <div className="flex items-center">
                <CiLocationOn />
                <p>Lisbon, Portugal</p>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="mt-20 flex gap-6 items-center justify-center text-white lg:absolute top-0 right-36">
          <button className="bg-black p-4 rounded-md">
            <IoIosArrowBack />
          </button>
          <button className="bg-orange-400 p-4 rounded-md">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

const PopularDestination = () => (
  <div className="my-36 relative ">
    {/* Container */}
    <div className="max-w-[1620px] mx-auto px-4">
      {/* Layout */}
      <div className="">
        {/* Title */}
        <Title />
        {/* Info */}
        <Card />
      </div>
    </div>
  </div>
);

export default PopularDestination;
