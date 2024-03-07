import type { NextPage } from "next";
import ReelSection from "../components/ReelSection";
import SnakeDesign from "../components/SnakeDesign";
import TeamSemiCircle from "../components/TeamSemiCircle";
import Navbar from "../components/Navbar";

const OurTeam: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[7315px] overflow-y-auto text-left text-9xl text-white font-heading-2">
      <div className="absolute top-[5974px] left-[0px] w-[1947.5px] overflow-hidden flex flex-col items-start justify-end pt-[120px] px-0 pb-0 box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[110px] px-[395.458740234375px]">
          <div className="w-[636.6px] h-[859.5px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
            <div className="w-[450px] h-[739.8px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="w-[450px] h-[600.3px] overflow-hidden shrink-0 flex flex-col items-end justify-end">
                <div className="w-[450px] relative h-[275.1px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] w-[450px] overflow-hidden flex flex-col items-center justify-center">
                    <div className="w-[450px] overflow-hidden flex flex-col items-center justify-center">
                      <div className="w-[450px] relative h-[275.1px] overflow-hidden shrink-0">
                        <div className="absolute top-[-174.9px] left-[0px] w-[450px] h-[485.4px] overflow-hidden">
                          <div className="absolute top-[174.9px] left-[0px] w-[450px] h-[275.1px] overflow-hidden">
                            <div className="absolute top-[-174.9px] left-[0px] w-[450px] h-[485.4px] overflow-hidden flex flex-col items-end justify-end">
                              <div className="w-[450px] relative rounded-881xl [background:linear-gradient(167.09deg,_rgba(113,_138,_74,_0.68),_rgba(0,_0,_0,_0))] shadow-[0px_-23px_54px_rgba(0,_0,_0,_0.09)] [backdrop-filter:blur(96px)] h-[450px] overflow-hidden shrink-0 [transform:_rotate(112.88deg)] opacity-[0.71]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[520px] relative h-[859.5px] overflow-hidden shrink-0 ml-[-333px]">
              <div className="absolute top-[0px] left-[0px] w-[520px] h-[858.1px] overflow-hidden flex flex-col items-end justify-start">
                <img
                  className="w-[521.3px] rounded-[43.59px] h-[481.4px] overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/frame-1321314983@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[520px] relative h-[859.3px] overflow-hidden shrink-0">
            <div className="absolute top-[140.5px] left-[75.7px] w-[244.1px] h-[578.2px] overflow-hidden flex flex-col items-center justify-start">
              <div className="w-[244.1px] relative h-[496.3px] overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[106.4px] rounded-881xl [background:linear-gradient(167.09deg,_rgba(138,_74,_108,_0.99),_rgba(0,_0,_0,_0))] shadow-[0px_-23px_54px_rgba(0,_0,_0,_0.09)] [backdrop-filter:blur(96px)] w-[244.1px] h-[244.1px] overflow-hidden [transform:_rotate(25.83deg)] [transform-origin:0_0] opacity-[0.69]" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[520px] h-[859.3px] overflow-hidden flex flex-col items-center justify-start">
              <div className="w-[520px] relative h-[857.9px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[377.9px] left-[0px] rounded-[43.59px] w-[521.3px] h-[481.4px] overflow-hidden object-contain"
                  alt=""
                  src="/frame-1321314984@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[2290px] overflow-hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_960px)] flex flex-col items-start justify-start">
          <div className="w-[1920px] flex flex-row items-center justify-between py-12 px-[120px] box-border">
            <div className="relative">StarClinch</div>
            <div className="flex flex-row items-start justify-start gap-[0px_65px] text-lg">
              <div className="flex flex-row items-center justify-start gap-[0px_16px]">
                <div className="relative">Book Celebrities</div>
                <img
                  className="w-[19px] relative h-3"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="relative">Join Community</div>
              <div className="relative">Post Your Requirements</div>
            </div>
          </div>
        </div>
        <Navbar />
        <ReelSection />
      </div>
      <div className="absolute top-[2350px] left-[1px] w-[1920px] h-[3497px] overflow-hidden">
        <TeamSemiCircle />
        <SnakeDesign />
      </div>
    </div>
  );
};

export default OurTeam;
