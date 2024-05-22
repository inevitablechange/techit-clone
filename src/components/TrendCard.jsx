const TrendCard = ({ title, name, image, views, date }) => {
  return (
    <li className="max-w-[394px] w-full">
      <img
        className="rounded-xl"
        src={`/images/trend/${image}.webp`}
        alt="blockchain"
      />
      <div className="py-5">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <h5 className="mb-2 text-techit-gray-200">{name}</h5>
        <div className="text-techit-gray-200 text-sm">
          {views} views · {date}
        </div>
      </div>
    </li>
  );
};

export default TrendCard;
