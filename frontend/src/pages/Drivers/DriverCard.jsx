/* eslint-disable react/prop-types */

import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DriverCard = ({ driver }) => {
  const {
    name,
    averageRating,
    totalRating,
    photo,
  } = driver;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img className="w-full" src={photo} alt="" />
      </div>
      <h2 className="text-18px leading-30px lg:text-26px lg:leading-9 font-700 text-headingColor mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="flex items-center gap-6px">
        <span className="flex items-center gap-6px text-14px leading-6 lg:text-16px lg:leading-7 font-600 text-headingColor">
          <img src={starIcon} alt="" /> {averageRating}
        </span>
        <span className="text-14px leading-6 lg:text-16px lg:leading-7 font-400 text-textColor">
          ({totalRating})
        </span>
      </div>

      <div className="mt-18px lg:mt-5 flex items-center justify-between">
        <Link
          to={`/drivers/${driver._id}`}
          className="w-44px h-44px rounded-full border border-solid border-181A1E flex items-center justify-center group hover:bg-0067FF hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DriverCard;
