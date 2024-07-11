import bgPatternTopMobile from "../assets/bg-pattern-top-mobile.svg";
import bgPatternBottomMobile from "../assets/bg-pattern-bottom-mobile.svg";

import bgPatternTopDesktop from "../assets/bg-pattern-top-desktop.svg";
import bgPatternBottomDesktop from "../assets/bg-pattern-bottom-desktop.svg";

export default function BackgroundsPatterns() {
  return (
    <>
      <img
        src={bgPatternTopMobile}
        alt="bg-pattern-top-mobile"
        className="absolute top-0 left-0 right-0 lg:hidden z-[-1]"
      />
      <img
        src={bgPatternBottomMobile}
        alt="bg-pattern-bottom-mobile"
        className="absolute  right-0 bottom-0 lg:hidden z-[-1]"
      />

      <img
        src={bgPatternTopDesktop}
        alt="bg-pattern-top-desktop"
        className="absolute top-0 left-0 right-0 hidden lg:block z-[-1]"
      />
      <img
        src={bgPatternBottomDesktop}
        alt="bg-pattern-bottom-desktop"
        className="absolute left-[23%] bottom-0 hidden lg:block z-[-1]"
      />
    </>
  );
}
