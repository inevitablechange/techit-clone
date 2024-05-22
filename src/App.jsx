import { useState, useEffect } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
import StripBanner from "./components/StripBanner";
import OnboardingSection from "./components/OnboardingSection";
import TrendSection from "./components/TrendSection";
import EducationSection from "./components/EducationSection";

const App = () => {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);

  return (
    <div className="font-pretendard text-techit-gray-300 mb-96">
      {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
      <Header />
      <SlideBanner />
      <KdtSection />
      <ScheduleSection />
      <StripBanner />
      <OnboardingSection />
      <TrendSection />
      <EducationSection />
    </div>
  );
};

export default App;
