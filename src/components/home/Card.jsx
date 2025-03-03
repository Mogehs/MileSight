import React from "react";

const Card = ({ image, name, video }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-80 h-100 md:w-50 md:h-43 flex flex-col items-center justify-center ">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl sm:rounded-none mt-25"
            />
          )}
          <video
            src={video}
            muted
            autoPlay
            loop
            className="w-full h-full object-cover rounded-xl sm:rounded-none "
          ></video>
        </div>
        <p className="text-lg md:text-xs">{name}</p>
      </div>
    </>
  );
};

export default Card;
