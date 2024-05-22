const SocialIcon = ({ image }) => {
  return (
    <img className="w-6 h-6" src={`/images/icons/${image}.svg`} alt={image} />
  );
};

export default SocialIcon;
