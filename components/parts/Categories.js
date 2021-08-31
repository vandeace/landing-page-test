import React from "react";

const Categories = ({ data }) => {
  return (
    <div className="mt-20">
      {data.map((category, index1) => {
        return (
          <section
            key={index1}
            className="container mx-auto mt-10 2xl:p-2 px-4 "
          >
            <div>
              <h4 className="font-medium text-2xl text-blue-dark leading-9 mb-10 md:mb-5">
                {category.name}
              </h4>
              <div className="grid lg:grid-cols-4 grid-cols-1  sm:grid-cols-2 gap-10">
                {category.items.length !== 0 &&
                  category.items.map((item, index2) => (
                    <div
                      key={`category-${index1}-item-${index2}`}
                    >
                      <div className="relative rounded-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                        {item.isPopular && (
                          <div className="z-20 absolute top-0 right-0 bg-pink text-white px-7 py-2 rounded-tr-2xl rounded-bl-2xl font-medium">
                            Popular <span>Choice</span>
                          </div>
                        )}

                        <figure className="z-0">
                          <img
                            src={item?.imageUrl}
                            alt={item.name}
                            className="object-cover w-full"
                          />
                        </figure>
                        <div className="mt-3">
                          <h5 className="text-lg text-blue-dark">
                            {item.name}
                          </h5>
                          <span className="text-sm text-gray-light ">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Categories;
