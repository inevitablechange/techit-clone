const StripBanner = () => {
  return (
    <div className="cursor-pointer mt-10 relative">
      <div className="flex flex-col justify-center pt-4 px-6 absolute top-0 left-1/2 -translate-x-1/2 container-style w-full h-full">
        <h5 className="mb-2 text-sm font-semibold">테킷 스쿨 사전알림</h5>
        <h3 className="text-lg font-semibold">지금 사전알림 신청하면</h3>
        <h3 className="mb-4 text-lg font-semibold">
          [IT 직무 취업 가이드북]을 드려요!
        </h3>
        <button className="flex items-center text-techit-gray-200 font-semibold">
          더 알아보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="ml-1 w-[14px] text-gray-500 lg:w-4"
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
      <img
        className="h-[200px] w-full object-cover"
        src="/images/strip_banner_768_prenotice.webp"
        alt="strip_banner"
      />
    </div>
  );
};

export default StripBanner;
