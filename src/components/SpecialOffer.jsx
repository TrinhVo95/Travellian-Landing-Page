const SpecialOffer = () => {
  const StarIcon = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(253 224 71 / var(--tw-text-opacity))"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </>
    );
  };

  const Card = ({ imageUrl, title, price }) => {
    return (
      <div className="grid py-6 rounded">
        {/* image */}
        <div>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-[286px] rounded-t-xl"
          />
        </div>
        {/* Descriptions & Details */}
        <div className="bg-orange-50 rounded-b-xl p-4">
          <h4 className="leading-9 text-gray-500">{title}</h4>
          {/* rating star*/}
          <div className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className=" pt-4">
            <span>
              <p className="text-xs">
                5 nights and 4 days in 5 star hotel, breakfast and lunch
                included. Very popular during the renaissance. Passage and going
                through the cites of the world in classical literature.
              </p>
            </span>
            <div className="flex justify-between py-5">
              <div className="flex justify-start items-center gap-2">
                <p className="text-xs text-gray-400 ">From</p>
                <p className="font-normal text-2xl sm:text-xl md:text-2xl text-orange-400">
                  {price}
                </p>
              </div>
              <button className="px-6 py-2 rounded sm:px-3 sm:py-1 sm:text-sm md:px-6 md:py-2 bg-orange-400 text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LeftRigtButtons = () => {
    return (
      <>
        <button className="bg-black rounded-md text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="bg-orange-600 rounded-md text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </>
    );
  };
  return (
    <section>
      {/* Container */}
      <div className="max-w-[1620px] mx-auto p-4 sm:px-6 sm:py-12 lg:px-14">
        {/* Layout */}
        <div className="flex justify-between items-end flex-row-reverse relative">
          <div className="sm:px-4">
            {/* Title */}
            <h1 className="font-serif font-normal text-5xl">Special Offer</h1>
            <hr className="w-[150px] border-2 solid bg-orange-400 border-orange-400" />
            <p className="text-sm text-gray-400">
              Check out our offer and discounts
            </p>
          </div>
          {/* L&R Buttons */}
          <div className="hidden sm:block sm:px-4">
            <div className="flex gap-4 justify-center ">
              {/* Left right buttons */}
              <LeftRigtButtons />
            </div>
          </div>
        </div>

        <section className="mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:px-4 gap-4 sm:gap-6 pt-7">
            {/* Card 1 */}
            <Card
              imageUrl="https://images.unsplash.com/photo-1605641532626-5ab1dab56350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Lisbon, Portugal"
              price="€500"
            />
            {/* Card 2 */}
            <div className="hidden sm:block">
              <Card
                imageUrl="https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Athena, Greece"
                price="€800"
              />
            </div>
            {/* Card 3 */}
            <div className="hidden sm:block">
              <Card
                imageUrl="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                title="Rome, Italy"
                price="€750"
              />
            </div>

            {/* L&R Buttons */}
            <div className="block sm:hidden">
              <div className="flex gap-4 items-end justify-center">
                {/* Left right buttons */}
                <LeftRigtButtons />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialOffer;
