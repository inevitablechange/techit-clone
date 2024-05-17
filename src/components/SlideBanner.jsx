import Image1 from "/images/home_banner_1024_unity_1st.webp";

const SlideBanner = () => {
  return (
    <div className="relative h-[400px]">
      <div className="container-style flex flex-col justify-center h-full text-white">
        <h3 className="text-[32px] font-bold">유니티 게임 스쿨 1기</h3>
        <h5 className="mt-2">게임 개발자로 거듭나기 위한 6개월간의 여정</h5>
      </div>
      <img
        className="absolute top-0 -z-10 w-full h-full object-cover"
        src={Image1}
        alt="이세계 유니티"
      />
    </div>
  );
};

export default SlideBanner;
