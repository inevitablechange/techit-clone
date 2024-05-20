const SlideBannerCard = ({ id, title, description, isWhite }) => {
  return (
    <div className="relative h-[400px]">
      <div
        className={`${
          isWhite && "text-white"
        } container-style flex flex-col justify-center h-full px-6`}
      >
        <h3 className="text-[32px] font-bold">{title}</h3>
        <h5 className="mt-2">{description}</h5>
      </div>
      <img
        className="absolute top-0 -z-10 w-full h-full object-cover"
        src={`/images/banners/${id}.webp`}
        alt="이세계 유니티"
      />
    </div>
  );
};

export default SlideBannerCard;
