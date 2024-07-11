import coltonIcon from "../assets/image-colton.jpg";
import ireneIcon from "../assets/image-irene.jpg";
import anneIcon from "../assets/image-anne.jpg";

const opinionsData = [
  {
    author: "Colton Smith",
    status: "Verified Buyer",
    opinion:
      "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!",
    icon: coltonIcon,
  },
  {
    author: "Irene Roberts",
    status: "Verified Buyer",
    opinion:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    icon: ireneIcon,
  },
  {
    author: "Anne Wallace",
    status: "Verified Buyer",
    opinion:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    icon: anneIcon,
  },
];

export default function OpinionsItems() {
  const marginTopLgClass = ["lg:mt-0", "lg:mt-[31px]", "lg:mt-[62px]"];
  return (
    <>
      {opinionsData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col rounded-[8px] bg-veryDarkMagenta p-[34px_32px_34px_32px] gap-[23px] lg:w-[31.5%] lg:p-[37px_35px_34px_32px] ${marginTopLgClass[index]}`}
        >
          <div className="flex items-center gap-[24px]">
            <img
              className="rounded-full w-[39px] aspect-square"
              src={item.icon}
              alt={item.author + " icon"}
            />{" "}
            <div>
              <p className="text-white text-[18px] font-bold">{item.author}</p>
              <p className="text-softPink text-[17px] mt-[-4px]">
                {item.status}
              </p>
            </div>
          </div>
          <p className="text-white text-[17px] leading-[22px] [word-spacing:-0.5px]">
            &#8220; {item.opinion} &#8221;
          </p>
        </div>
      ))}
    </>
  );
}
