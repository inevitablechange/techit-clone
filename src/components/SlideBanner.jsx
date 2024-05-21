import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import SlideBannerCard from "./SlideBannerCard";

const SlideBannerData = [
  {
    id: 1,
    title: "멋사 넥스트와 함께하는 더 나은 내일을 향한 도전",
    description: "코테 만렙 찍기’ 강의부터 ‘ChatGPT’ 강의까지",
  },
  {
    id: 2,
    title: "2024년 취뽀는 사전알림 신청부터!",
    description: "지금 신청하고, [IT 직무 취업 가이드북] 받아가세요",
  },
  {
    id: 3,
    title: "2024 Epson Innovation Challenge",
    description:
      "총 상금 2,000만원, API를 통한 새로운 비즈니스 솔루션 개발에 지금 도전하세요.",
    isWhite: true,
  },
  {
    id: 4,
    title: "클라우드 엔지니어링 스쿨 1기",
    description: "게임 개발자로 거듭나기 위한 6개월간의 여정",
    isWhite: true,
  },
  {
    id: 5,
    title: "TECHIT 온보딩 트랙",
    description: "수강료 0원 & 취준생, 직장인 누구나 수강 가능한 기초 과정!",
  },
  {
    id: 6,
    title: "카카오톡 채널 추가 이벤트",
    description: "직무별 개발자 인터뷰부터 수료생 리얼 후기까지!",
  },
  {
    id: 7,
    title: "유니티 게임 스쿨 1기",
    description: "게임 개발자로 거듭나기 위한 6개월간의 여정",
    isWhite: true,
  },
  {
    id: 8,
    title: "스타트업 스테이션 9기",
    description: "IT 창업 시작을 위한 첫 번째 스텝",
  },
];

const SlideBanner = () => {
  const sliderRef = useRef();

  const [page, setPage] = useState(0);

  const onClickNext = () => {
    sliderRef.current.slickNext();
    getCurrentPage();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
    getCurrentPage();
  };

  const getCurrentPage = () => {
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Slider
        speed={500}
        fade={true}
        autoplay={true}
        autoplayspeed={2000}
        arrows={false}
        ref={sliderRef}
      >
        {SlideBannerData.map((v) => (
          <SlideBannerCard
            key={v.id}
            id={v.id}
            title={v.title}
            description={v.description}
            isWhite={v.isWhite}
          />
        ))}
      </Slider>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[1280px] w-full px-6">
        <div className="text-white bg-black bg-opacity-30 flex w-fit text-xs rounded-full gap-2 px-3 py-[5px]">
          <div> {page + 1} / 8</div>
          <button onClick={onClickPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button onClick={onClickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
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
      </div>
    </div>
  );
};

export default SlideBanner;
