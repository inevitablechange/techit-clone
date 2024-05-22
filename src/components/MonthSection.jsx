import { useEffect, useState } from "react";
import monthData from "../data/monthData.json";
import MonthCard from "./MonthCard";

const MonthSection = () => {
  const [currentMonthData, setCurrentMonthData] = useState(monthData[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const onClickNext = () => {
    if (currentPage === monthData.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
      console.log(typeof monthData.length);
    }
  };

  const onClickPrev = () => {
    if (currentPage === 0) {
      setCurrentPage(monthData.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentMonthData(monthData[currentPage]);
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="font-semibold mx-2 text-2xl">
          {Object.keys(currentMonthData)[0]}
        </div>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
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
      <ul className="grid grid-cols-2 mt-4 gap-4 center">
        {currentMonthData[Object.keys(currentMonthData)[0]].length === 0 ? (
          <li className="flex flex-col items-center mt-4 ">
            <img src="/images/empty.png" alt="empty" />
            <div className="mt-3 text-techit-gray-200">
              해당 달에는 수강 가능한 클래스가 없습니다.
            </div>
          </li>
        ) : (
          currentMonthData[Object.keys(currentMonthData)[0]].map((v, i) => (
            <MonthCard key={i} cardData={v} />
          ))
        )}
      </ul>
    </div>
  );
};

export default MonthSection;
