import type { NextPage } from "next";
import SnakeImage from "./SnakeImage";

const SnakeDesign: NextPage = () => {
  return (
    <div className="absolute top-[1080px] left-[0px] w-[1920px] h-[2417px] overflow-hidden">
      <div className="absolute top-[1925.1px] left-[284px] w-[1352.1px] h-[460.7px] overflow-hidden">
        <SnakeImage
          dimensionsText="/frame-1321314913-3@2x.png"
          SnakeImagePosition="absolute"
          SnakeImageTop="0px"
          SnakeImageLeft="392.7px"
        />
      </div>
      <div className="absolute top-[0px] left-[275.1px] w-[1369.8px] h-[2426.5px] overflow-hidden">
        <div className="absolute top-[1344.4px] left-[0px] w-[1369.8px] h-[460.7px] overflow-hidden">
          <SnakeImage
            dimensionsText="/frame-1321314913-2@2x.png"
            SnakeImagePosition="absolute"
            SnakeImageTop="0px"
            SnakeImageLeft="0px"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1369.8px] h-[2426.5px] overflow-hidden">
          <div className="absolute top-[763.7px] left-[8.9px] w-[1352.1px] h-[460.7px] overflow-hidden">
            <SnakeImage
              dimensionsText="/frame-1321314913-1@2x.png"
              SnakeImagePosition="absolute"
              SnakeImageTop="0px"
              SnakeImageLeft="392.7px"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[1369.8px] h-[2426.5px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[119.1px] w-[1131.6px] h-[2426.5px] overflow-hidden"
              alt=""
              src="/frame.svg"
            />
            <div className="absolute top-[183px] left-[0px] w-[1369.8px] h-[460.7px] overflow-hidden">
              <SnakeImage
                dimensionsText="/frame-1321314913@2x.png"
                SnakeImagePosition="absolute"
                SnakeImageTop="0px"
                SnakeImageLeft="0px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeDesign;
