import Logo from "/images/techit_logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 border border-techit-gray-100 bg-white z-10">
      <div className="container-style flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6">
            <img className="w-[108px]" src={Logo} alt="TechIT" />
          </div>
          <nav className="hidden lg:flex">
            <button className="nav-button-style">테킷 스쿨</button>
            <button className="nav-button-style">온보딩 트랙</button>
            <button className="nav-button-style">스타트업 스테이션</button>
            <span className="relative">
              <button className="nav-button-style">!T 트렌드</button>
              <div className="absolute top-2 right-0 bg-[#ef4444] w-4 h-4 rounded-full text-[10px] text-white font-semibold flex justify-center items-center">
                N
              </div>
            </span>
            <button className="nav-button-style">이벤트</button>
            <span className="border-l border-techit-gray-100 h-5 self-center" />
            <button className="nav-button-style">기업 해커톤</button>
          </nav>
        </div>
        <div className="flex pr-2 lg:pr-0">
          <button className="px-4 lg:px-6 py-2 lg:py-5 font-semibold text-techit-gray-300 lg:text-techit-gray-200 text-sm lg:text-base border lg:border-0 border-techit-gray-100 rounded-full lg:rounded-none">
            로그인
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="40"
            className="p-2 inline-block lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
