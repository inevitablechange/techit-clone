const OnboardingCard = ({
  title,
  description,
  image,
  tags,
  price,
  discountPrice,
}) => {
  return (
    <li className="w-[394px]">
      <img
        className="rounded-xl"
        src={`/images/onboarding/${image}.png`}
        alt="blockchain"
      />
      <div className="mt-4 flex gap-[6px]">
        {tags.map((v, i) => (
          <span key={i} className="card-tag-style">
            {v}
          </span>
        ))}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <h5 className="mt-2 text-techit-gray-200">{description}</h5>
      <div className="mt-2">
        <span className="font-medium">{discountPrice.toLocaleString()}원</span>
        <span className="text-sm text-techit-gray-150 ml-1 line-through">
          {price.toLocaleString()}원
        </span>
      </div>
      <span className="mt-2 text-xs text-techit-main bg-[#ffedd5] px-1.5 py-0.5 font-semibold">
        수료시 전액환급
      </span>
    </li>
  );
};

export default OnboardingCard;
