import TitleBar from "./TitleBar";
import TrendCard from "./TrendCard";
import trendData from "../data/trendData.json";

const TrendSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="최신 기술 트렌드 확인하기"
        description="!T 트렌드"
        isDetail={true}
      />
      <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {trendData.map((v, i) => (
          <TrendCard
            key={i}
            title={v.title}
            name={v.name}
            image={v.image}
            views={v.views}
            date={v.date}
          />
        ))}
      </ul>
    </section>
  );
};

export default TrendSection;
