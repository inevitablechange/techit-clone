import CLD from "/images/techit_CLD01_keyvisual(1).webp";

const TopBanner = ({ setIsViewed }) => {
  const onClickClose = () => {
    localStorage.setItem("isViewed", 1);

    setIsViewed(true);
  };

  return (
    <div className="h-[42px] bg-[#ff7711] flex items-center">
      <div className="max-w-screen-xl mx-auto w-full px-[10px] text-sm font-medium md:text-base md:font-semibold flex justify-between items-center">
        <div className="flex items-center">
          기초가 탄탄한 클라우드 엔지니어 교육
          <img className="w-[52px]" src={CLD} alt="CLD" />
        </div>
        <button className="w-5 h-5" onClick={onClickClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-full w-full"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
