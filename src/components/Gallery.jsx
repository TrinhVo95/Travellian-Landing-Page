const Gallery = () => {
  return (
    <section>
      {/* Container */}
      <div className="max-w-[1620px] mx-auto px-8">
        {/* Layout */}
        <div className="lg:relative">
          <div>
            <h3 className="font-normal text-4xl md:text-5xl 2xl:text-6xl">
              Destination Gallery
            </h3>
            <hr className="w-1/3 border-orange-400 border-t-4 mt-4" />
            <p className="my-5 text-gray-400 text-lg">
              Our photo gallery on trip
            </p>
          </div>
          {/* Images */}
          <div className="grid gap-6 lg:grid-cols-4 py-10">
            <img
              className="rounded-3xl aspect-square w-full md:h-96 object-cover hover:-translate-y-6 transition-all"
              src="https://imaaya.b-cdn.net/wp-content/uploads/elementor/thumbs/toa-heftiba-0rlfiRSdVzU-unsplash-scaled-px3yl50lasxj8ppuetc6h548fa1b76rajgi11h5204.jpg"
              alt=""
            />
            <img
              className="rounded-3xl aspect-square w-full md:h-96 object-cover hover:-translate-y-6  transition-all"
              src="https://images.unsplash.com/photo-1497184380246-bde200db36c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <img
              className="rounded-3xl aspect-square w-full md:h-96 object-cover hover:-translate-y-6  transition-all"
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <img
              className="rounded-3xl aspect-square w-full md:h-96 object-cover hover:-translate-y-6  transition-all"
              src="https://images.unsplash.com/photo-1528478246253-b119d2406290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
          </div>
          {/* Chevron */}
          <div className="flex justify-center gap-8 mt-5 lg:absolute top-10 right-2">
            {/* Left */}
            <button className="rounded-md p-4 bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-6 h-6  text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {/* Right */}
            <button className="rounded-md  bg-orange-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6  text-white  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
