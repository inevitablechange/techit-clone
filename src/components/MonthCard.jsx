const MonthCard = ({ cardData }) => {
  return (
    <li className="flex border border-techit-gray-100 rounded-lg max-w-[604px]">
      <img
        className="w-[208px] rounded-l-lg object-cover"
        src={`/images/kdts/${cardData.image}.webp`}
        alt={cardData.image}
      />
      <div className="p-4">
        <span
          className={`${
            cardData["d-day"] === "ing"
              ? "text-[#1d4ed8] border-[#1d4ed8]"
              : cardData["d-day"] === "alarm"
              ? "text-[#059669] border-[#059669]"
              : "text-[#3f3f46] border-[#3f3f46]"
          } mt-4 text-sm font-semibold border  py-1 px-2 rounded w-fit`}
        >
          {cardData["d-day"] === "ing"
            ? "모집중"
            : cardData["d-day"] === "alarm"
            ? "사전알림신청"
            : "모집마감"}
        </span>
        <h3 className="mt-2 mb-1 text-xl font-bold">{cardData.title}</h3>
        <h5 className="mb-1 text-lg">{cardData.description}</h5>
        <span className="text-techit-gray-200">{cardData.period}</span>
      </div>
    </li>
  );
};

export default MonthCard;
