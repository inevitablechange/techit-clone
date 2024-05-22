const EducationCard = ({ title, descrtion, image }) => {
  return (
    <li className="max-w-[604px] w-full relative">
      <img
        className="rounded-xl"
        src={`/images/education/${image}.webp`}
        alt="blockchain"
      />
      <div className="absolute top-0 left-0 p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h5 className="mt-2">{descrtion}</h5>
        <button className="flex items-center mt-4 text-sm text-techit-gray-200 font-semibold">
          더 알아보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            className="ml-1 text-gray-500 md:ml-2"
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
    </li>
  );
};

export default EducationCard;
