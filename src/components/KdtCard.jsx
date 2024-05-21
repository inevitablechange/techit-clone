import { useState } from "react";

const KdtCard = ({ kdtData }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className="w-[290px] h-[416px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className={`${isHover && "scale-110"} rounded-lg duration-300`}
          src={`/images/kdts/${kdtData.image}.webp`}
          alt={kdtData.title}
        />
      </div>
      <div
        className={`${
          kdtData["d-day"] === "ing"
            ? "text-[#1d4ed8] border-[#1d4ed8]"
            : kdtData["d-day"] === "alarm"
            ? "text-[#059669] border-[#059669]"
            : "text-[#3f3f46] border-[#3f3f46]"
        } mt-4 text-sm font-semibold border  py-1 px-2 rounded w-fit`}
      >
        {kdtData["d-day"] === "ing"
          ? "모집중"
          : kdtData["d-day"] === "alarm"
          ? "사전알림신청"
          : "모집마감"}
      </div>
      <div className="text-xl font-semibold mt-4 mb-2">{kdtData.title}</div>
      <div className="text-lg">{kdtData.description}</div>
      <div className="mt-4 text-techit-gray-150">{kdtData.period}</div>
    </li>
  );
};

export default KdtCard;
