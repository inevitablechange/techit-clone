import TitleBar from "./TitleBar";
import onboardingData from "../data/onboardingData.json";
import OnboardingCard from "./OnboardingCard";

const OnboardingSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="테킷 온보딩 트랙"
        description="K-Digital 기초역량훈련 클래스"
        isDetail={true}
      />
      <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {onboardingData.map((v, i) => (
          <OnboardingCard
            key={i}
            title={v.title}
            description={v.description}
            image={v.image}
            tags={v.tags}
            price={v.price}
            discountPrice={v.discountPrice}
          />
        ))}
      </ul>
    </section>
  );
};

export default OnboardingSection;
