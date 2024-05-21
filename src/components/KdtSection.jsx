import kdtData from "../data/kdtData.json";
import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const KdtSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-10">
        {kdtData.map((v, i) => (
          <KdtCard key={i} kdtData={v} />
        ))}
      </ul>
    </section>
  );
};

export default KdtSection;
