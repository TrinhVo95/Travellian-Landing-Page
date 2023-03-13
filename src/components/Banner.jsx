const Banner = () => {
  return (
    <div className="mt-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 pb-9">
        {/* Layout */}
        <div className="">
          {/* Title */}
          <div className="text-white mb-28 sm:mt-20">
            <h1 className="text-6xl sm:text-5xl">
              Start your unforgettable journey with us.
            </h1>
            <p className="text-lg pt-8">
              The best travel for your jouney begins now
            </p>
          </div>
          {/* Book now */}
          <div className="sm:w-5/6 flex flex-col sm:flex-row sm:-ml-4 lg:-ml-[72px] xl:-ml-[135px]">
            {/* Grid */}
            <div className="flex-grow bg-white py-[74px] rounded-t-lg  sm:rounded-t-none  sm:rounded-tl-none sm:rounded-bl-none">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 px-4 md:grid-cols-4 items-center">
                <div className="">
                  <h4 className="pb-2">DESTINATION</h4>
                  <input
                    className="w-full bg-white border-b-2"
                    type="text"
                    placeholder="DUBAI"
                  />
                </div>
                <div className="">
                  <h4 className="pb-2">PERSON</h4>
                  <input
                    className="w-full bg-white border-b-2"
                    type="number"
                    placeholder="2"
                  />
                </div>
                <div className="">
                  <h4 className="pb-2">CHECK IN</h4>
                  <input
                    className="w-full bg-white border-b-2"
                    type="text"
                    placeholder="Sun, 17th Sep 2020"
                  />
                </div>
                <div className="">
                  <h4 className="pb-2">CHECK OUT</h4>
                  <input
                    className="w-full bg-white border-b-2"
                    type="text"
                    placeholder="Tue, 17th Oct 2020"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-orange-400 p-5 text-white rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:px-5">
              Book Now +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
