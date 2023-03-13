const OurBlog = () => {
  return (
    <div>
      {/* Container */}
      <div className="max-w-[1620px] mx-auto px-6 py-10 sm:px-4 sm:py-12 lg:px-14">
        {/* Layout */}
        <div className="pb-4">
          {/* Title */}
          <h1 className="font-serif font-normal text-5xl mb-4">Our Blog</h1>
          <hr className="w-[150px] mb-4 border-2 solid bg-orange-400 border-orange-400" />
          <p className="text-sm text-gray-500">
            An insight the incredible experience in the world
          </p>
        </div>
        {/* ContentBox */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto sm:h-[500px] gap-6 pt-1">
          <div className="pt-8 mx-auto">
            {/* img */}
            <img
              src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
              className="w-[600px] sm:w-[800px] h-[500px] rounded-2xl object-cover"
            />
          </div>
          <div className="pt-2 sm:pt-6">
            {/* Content */}
            <div className="pb-4 sm:pt-8">
              <h3 className="leading-10 text-4xl font-serif pb-4">
                Beautiful Italy
                <br />
                Let's travel
              </h3>
            </div>
            <p className="leading-8 text-base">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master- builder of human
              happiness. No one rejects, dislike, or avoids plasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremly painful. Nor again is there anyone who loves or pursues.
            </p>
            <div className="flex gap-2 items-center">
              <button className="text-xl font-sans text-orange-400 pt-5">
                Read More
              </button>
              <button className="pt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-orange-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
