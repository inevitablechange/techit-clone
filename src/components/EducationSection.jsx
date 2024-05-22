import TitleBar from "./TitleBar";
import educationData from "../data/educationData.json";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="모든 교육 경험"
        description="테킷이 두드리는 새로운 교육"
      />
      <ul className="mt-10 grid grid-cols-2 gap-6 justify-items-center">
        {educationData.map((v, i) => (
          <EducationCard
            key={i}
            title={v.title}
            descrtion={v.description}
            image={v.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
