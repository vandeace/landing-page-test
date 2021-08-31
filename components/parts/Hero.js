import React from "react";

const Hero = (props) => {

  return (
    <div >
      <section className="pt-5 container mx-auto flex lg:flex-row flex-col 2xl:p-2 px-4">
        <div
          className="flex justify-between flex-col lg:w-2/4 w-full md:mt-10 "
          style={{ height: 550 }}
        >
          <div>
            <h1 className="text-5xl text-blue-dark font-extrabold">
              Forget Busy work, <br /> Start Next Vacation
            </h1>
            <p className=" sm:w-2/4 w-full pt-4 text-gray-light ">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <button
              className="bg-blue-primary py-3 px-10 font-semibold text-white rounded-lg shadow-lg mt-10 hover:bg-blue-dark "
            >
              Show Me Now
            </button>
          </div>
          <div className="grid grid-cols-3 gap-10 mr-10">
            <div className="flex justify-center items-center flex-col">
              <img
                src='/icon-traveler.svg'
                alt={`travelers`}
                style={{ height: 50, width: 50 }}
              />
              <div className="flex flex-col xl:flex-row text-center mt-2">
                <h6 className="text-blue-dark">80409</h6>
                <h5 className="text-gray-light md:pl-1">travelers</h5>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col ">
              <img
                style={{ height: 50, width: 50 }}
                src='/icon-cities.svg'
                alt={` cities`}
              />
              <div className="flex flex-col xl:flex-row text-center mt-2">
                <h6 className="text-blue-dark">1492</h6>
                <h5 className="text-gray-light md:pl-1">cities</h5>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img
                style={{ height: 50, width: 50 }}
                src='/icon-treasure.svg'
                alt={`travelers`}
              />
              <div className="flex flex-col xl:flex-row text-center mt-2">
                <h6 className="text-blue-dark">882</h6>
                <h5 className="text-gray-light md:pl-1">treasures</h5>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-2/4 lg:w-2/4 w-full mt-10">
          <div className="h-2/4 md:h-full" style={{ height: 550 }}>
            <img
              className="object-cover h-full w-full"
              src={"picture.jpg"}
              alt="room with couches"
              style={{
                border: "1px solid #152C5B",
                borderRadius: "150px 10px 150px 10px",
                boxShadow: "10px 10px 5px 0px #152C5B",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
