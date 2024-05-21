import { useEffect, useState } from "react";

const ClassButton = ({ classData, classCardComps, setClassCardComps }) => {
  const [isClicked, setIsClicked] = useState();

  const onClickClass = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      setClassCardComps([...classCardComps, classData]);
    } else {
      const temp = classCardComps.filter((v) => {
        if (v.name !== classData.name) {
          return v;
        }
      });

      setClassCardComps(temp);
    }
  }, [isClicked]);

  return (
    <button
      className={`${
        isClicked
          ? "border-techit-main text-techit-main bg-[#fff7ed]"
          : "border-techit-gray-100"
      } px-3 py-2 text-lg border rounded-md`}
      onClick={onClickClass}
    >
      {classData.name}
    </button>
  );
};

export default ClassButton;
