import iconStar from "../assets/icon-star.svg";

const starsData = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

export default function StarItems() {
  function repeatStars(num) {
    return Array(num).fill(<img src={iconStar} alt="icon star" />);
  }

  return (
    <>
      {starsData.map((item, index) => (
        <li
          key={index}
          className={`flex flex-col justify-center items-center pt-[20px] pb-[8px] bg-lightGrayishMagenta rounded-[8px] gap-[8px] lg:w-[83%] lg:flex-row lg:py-[16px] lg:ps-[6.2%] lg:justify-start lg:gap-[32px] item-${index}`}
        >
          <div className="flex gap-[8px]">{repeatStars(5)}</div>
          <p className="font-bold text-veryDarkMagenta text-[17px]">{item}</p>
        </li>
      ))}
    </>
  );
}
