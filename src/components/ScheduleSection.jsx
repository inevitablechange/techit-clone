import { useState } from "react";
import TitleBar from "./TitleBar";
import ClassButton from "./ClassButton";
import ClassCard from "./ClassCard";
import classData from "../data/classData.json";

const ScheduleSection = () => {
  const [isClass, setIsClass] = useState(true);
  const [classCardComps, setClassCardComps] = useState([]);

  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        description="한 눈에 보는 테킷 스쿨 오픈 일정"
      />
      <div className="mt-5 border-b border-techit-gray-100">
        <button
          className={`${
            isClass
              ? "text-techit-main font-medium border-b-2 border-techit-main"
              : "text-techit-gray-200 font-light"
          } text-xl mr-4 h-[38px]`}
          onClick={() => setIsClass(true)}
        >
          클래스 별
        </button>
        <button
          className={`${
            isClass
              ? "text-techit-gray-200 font-light"
              : "text-techit-main font-medium border-b-2 border-techit-main"
          } text-xl mr-4 h-[38px]`}
          onClick={() => setIsClass(false)}
        >
          월별로 보기
        </button>
      </div>
      <h6 className="mt-8 mb-6 text-xl font-semibold">
        관심있는 클래스를 선택해주세요.
      </h6>
      <div className="border border-techit-gray-100 rounded-lg p-6 flex flex-wrap gap-[10px]">
        {classData.map((v, i) => (
          <ClassButton
            key={i}
            classData={v}
            classCardComps={classCardComps}
            setClassCardComps={setClassCardComps}
          />
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-6 mt-6">
        {classCardComps.map((v, i) => (
          <li
            key={v.name + i}
            className="border border-techit-gray-100 rounded-lg max-w-[604px] w-full"
          >
            <ClassCard
              name={v.name}
              description={v.description}
              image={v.image}
              bgColor={v.bgColor}
              alarm={v.alarm}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScheduleSection;
