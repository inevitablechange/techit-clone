const ClassCard = ({ name, description, image, alarm }) => {
  return (
    <>
      <div
        className={`${
          name === "프론트엔드"
            ? "bg-[#e5f4ff]"
            : name === "백엔드 : Java"
            ? "bg-[#ebf7eb]"
            : name === "백엔드 : Python"
            ? "bg-[#ebf7eb]"
            : name === "앱스쿨 : iOS"
            ? "bg-[#e9e5ff]"
            : name === "AI 스쿨"
            ? "bg-[#e5efff]"
            : name === "앱스쿨 : Android"
            ? "bg-[#e9e5ff]"
            : name === "데이터 분석"
            ? "bg-[#ccfbf1]"
            : name === "디자인"
            ? "bg-[#fce8e6]"
            : name === "블록체인"
            ? "bg-[#f7e3fc]"
            : name === "스타트업 스테이션"
            ? "bg-[#fff3eb]"
            : name === "프론트엔드 심화"
            ? "bg-[#e5f4ff]"
            : name === "백엔드 심화" && "bg-[#ebf7eb]"
        }  flex justify-between rounded-t-lg px-6 py-4`}
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="text-techit-gray-200">{description}</h5>
        </div>
        <img
          className="w-[126px]"
          src={`/images/class/${image}.png`}
          alt="frontend"
        />
      </div>
      <div className="flex justify-between mt-5 mb-3 px-6">
        <div className="font-bold">{alarm}</div>
        <button className="flex items-center">
          사전알림신청
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            className="ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ClassCard;
