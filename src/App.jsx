import HeroSection from "./components/Hero";
import StarItems from "./components/StarItems";
import OpinionsItems from "./components/OpinionsItems";
import BackgroundsPatterns from "./components/Backgound";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="p-[81px_24px] relative md:p-[117px_10.5%_117px_11.5%]">
        <BackgroundsPatterns />
        <div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[39%] ">
              <HeroSection />
            </div>
            <ul className="mt-[34px] flex flex-col gap-[17px] lg:w-[49%] lg:mt-[25px] lg:gap-[15px]">
              <StarItems />
            </ul>
          </div>
          <div className="mt-[50px] flex flex-col gap-[14px] lg:flex-row lg:mt-[38px] lg:items-center lg:justify-between">
            <OpinionsItems />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
