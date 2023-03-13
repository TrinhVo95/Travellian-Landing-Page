const Star = () => {
  return (
    <div className="flex justify-between my-3 ">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 204 21)"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          className="w-6 h-6 text-yellow-400 xl:w-4 xl:h-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 204 21)"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          className="w-6 h-6 xl:w-4 xl:h-4 text-yellow-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 204 21)"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          className="w-6 h-6 xl:w-4 xl:h-4 text-yellow-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 204 21)"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          className="w-6 h-6 xl:w-4 xl:h-4 text-yellow-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 204 21)"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="currentColor"
          className="w-6 h-6 xl:w-4 xl:h-4 text-yellow-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </div>
      <p className="md:text-2xl xl:text-sm 2xl:text-lg">7 Days tour</p>
    </div>
  );
};

const TripPlanner = ({ imageUrl, text, price }) => {
  return (
    <div className="group">
      <img
        className="rounded-3xl aspect-square w-full md:h-96 object-cover  "
        src={imageUrl}
        alt={text}
      />
      <div className="xl:max-h-0 xl:overflow-hidden xl:group-hover:max-h-[200px] transition-all">
        <h5 className="flex justify-between md:text-2xl mt-3 xl:text-sm 2xl:text-lg">
          GUIDED TOUR <span>€{price}/Day</span>
        </h5>
        <h4 className="font-semibold text-2xl mt-2">{text}</h4>
        <Star />
      </div>
    </div>
  );
};

const TripPlanners = () => {
  return (
    <section>
      {/* Container */}
      <div className="max-w-[1620px] mx-auto px-8">
        {/* Layout */}
        <div className="xl:flex items-center gap-2">
          <div className="md:flex md:flex-col my-auto basis-1/3">
            <h2 className="font-normal text-4xl md:text-5xl 2xl:text-6xl">
              Trip Planners
            </h2>
            <hr className="w-2/3 border-orange-400 border-t-4 mt-4" />
            <p className="my-4 text-gray-400 text-lg">
              20 years from now you will be more disappointed by the things that
              you didn’t do. Stop regretting and start travelling, start
              throwing off the bowlines.
            </p>
            {/* Rectangle */}
            <div className="2xl:ml-6">
              <div className="absolute border w-[43px] h-[43px] bg-gray-700"></div>
              <button className="relative top-5 left-3 z-10 text-lg text-white border rounded-xl bg-orange-400 p-4">
                View all trip plans
              </button>
              <div className="relative left-40 border w-[43px] h-[43px] bg-gray-500"></div>
            </div>
          </div>
          {/* Pictures */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-8 my-40 sm:min-h-[550px] basis-2/3">
            <TripPlanner
              imageUrl="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80"
              text="Rome City Tour"
              price="99"
            />

            <TripPlanner
              imageUrl="https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              text=" Paris City Tour"
              price="95"
            />

            <TripPlanner
              imageUrl="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              text="Barcelona City Tour"
              price="89"
            />

            <TripPlanner
              imageUrl="https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              text="Budapest City Tour"
              price="89"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanners;
