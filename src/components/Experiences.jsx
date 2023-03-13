const ExperienceItem = ({ imageUrl, name, job }) => {
  return (
    <div>
      <img
        className="h-[100px] w-[100px] relative left-5 top-[35px] z-50"
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col items-start gap-5 px-5 pt-[60px] isolate bg-[#F5F6F7] rounded-xl">
        <p className="text-[#767E86] text-lg leading-[23px]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system and expound the actual teachings of the great
          explorer of the truth, the master- builder of human happiness.
        </p>
        <div className="flex gap-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5L13.09 6.76L20 7.77L15 12.64L16.18 19.52L10 16.27L3.82 19.52L5 12.64L0 7.77L6.91 6.76L10 0.5Z"
              fill="#FFC107"
            />
          </svg>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5L13.09 6.76L20 7.77L15 12.64L16.18 19.52L10 16.27L3.82 19.52L5 12.64L0 7.77L6.91 6.76L10 0.5Z"
              fill="#FFC107"
            />
          </svg>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5L13.09 6.76L20 7.77L15 12.64L16.18 19.52L10 16.27L3.82 19.52L5 12.64L0 7.77L6.91 6.76L10 0.5Z"
              fill="#FFC107"
            />
          </svg>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5L13.09 6.76L20 7.77L15 12.64L16.18 19.52L10 16.27L3.82 19.52L5 12.64L0 7.77L6.91 6.76L10 0.5Z"
              fill="#FFC107"
            />
          </svg>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5L13.09 6.76L20 7.77L15 12.64L16.18 19.52L10 16.27L3.82 19.52L5 12.64L0 7.77L6.91 6.76L10 0.5Z"
              fill="#FFC107"
            />
          </svg>
        </div>
        <div className="text-[#767E86] mb-8 ">
          <h4 className="text-2xl">{name}</h4>
          <p className="text-lg leading-[21px]">{job}</p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section>
      {/* Container */}
      <div className="max-w-[1620px] mx-auto px-4 md:px-8 mt-16">
        {/* Layout */}
        <div>
          {/* Title */}
          <div>
            <h2 className="text-5xl md:text-[64px] leading-[64px] text-[#172432] mb-5">
              Traveler’s Experiences
            </h2>
            <div className="border-[3px] border-[#FF7757] bg-[#FF7757] mb-8 w-[285px] md:w-[347px]"></div>
            <p className="text-lg leading-[21px] md:text-2xl text-[#767E86]">
              Here some awesome feedback from our travelers
            </p>
          </div>

          {/* Items */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Item */}
            <ExperienceItem
              imageUrl="https://diadiemhanquoc.com/wp-content/uploads/2023/01/Avatar3.png"
              name="John Doe"
              job="Accountant"
            />
            <ExperienceItem
              imageUrl="https://diadiemhanquoc.com/wp-content/uploads/2023/01/Avatar2.png"
              name="John Smith"
              job="Journalist, HWO News"
            />
            <ExperienceItem
              imageUrl="https://diadiemhanquoc.com/wp-content/uploads/2023/01/Avatar.png"
              name="Tamara Bellis"
              job="Managing Director, JTH"
            />
          </div>

          {/* Slide button */}
          <div className="flex justify-center gap-10 lg:justify-end mb-20 mt-[100px] md:mt-40 lg:mb-0">
            <button className="flex flex-col items-center justify-center rounded-xl gap-1 bg-[#FF7757] h-[66px] w-[60px] ">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="flex flex-col items-center justify-center rounded-xl gap-1 bg-black h-[66px] w-[60px]">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
