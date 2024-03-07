import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SnakeImageType = {
  dimensionsText?: string;

  /** Style props */
  SnakeImagePosition?: CSSProperties["position"];
  SnakeImageTop?: CSSProperties["top"];
  SnakeImageLeft?: CSSProperties["left"];
};

const SnakeImage: NextPage<SnakeImageType> = ({
  dimensionsText,
  SnakeImagePosition,
  SnakeImageTop,
  SnakeImageLeft,
}) => {
  const SnakeImageStyle: CSSProperties = useMemo(() => {
    return {
      position: SnakeImagePosition,
      top: SnakeImageTop,
      left: SnakeImageLeft,
    };
  }, [SnakeImagePosition, SnakeImageTop, SnakeImageLeft]);

  return (
    <div
      className="w-[959.3px] h-[460.7px] text-right text-29xl text-white font-heading-2"
      style={SnakeImageStyle}
    >
      <div className="absolute top-[269px] left-[7px] inline-block w-[447px] opacity-[0.37]">
        Late Night Maggie Party for the boost
      </div>
      <img
        className="absolute top-[0px] left-[498px] rounded-[35.19px] w-[461.3px] h-[460.7px] overflow-hidden object-contain"
        alt=""
        src={dimensionsText}
      />
    </div>
  );
};

export default SnakeImage;
