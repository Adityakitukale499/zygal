import React from "react";

const Design3 = () => {
  const avatars = [
    "avatar1",
    "avatar2",
    "avatar3",
    "avatar4",
    "avatar5",
    "avatar1",
    "avatar2",
    "avatar3",
    "avatar4",
    "avatar5",
  ];

  const images = ["image1", "image2", "image3", "image4", "image5"];

  return (
    <div className="h-screens flex-col">
      <div className="flex overflow-x-auto">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            className=" h-16 w-16 rounded-full ring-2 ring-white m-1"
            src={`https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * (50 - 10) + 10
            )}.jpg`}
            alt=""
          />
        ))}
      </div>
      <div className="mt-4 h-96 overflow-y-auto">
        {images.map((image, index) => (
          <div key={index} className="h-32 bg-gray-300 mb-2"></div>
        ))}
      </div>
    </div>
  );
};

export default Design3;
