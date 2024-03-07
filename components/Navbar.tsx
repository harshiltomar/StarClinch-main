import React from "react";
import arijit from "../public/arijit-singh-1@2x.png";

function Navbar() {
  return (
    <div className="absolute top-[130px] left-[0px] w-[1920px] h-[1080px] overflow-hidden">
      <div className="absolute top-[941px] left-[650px] w-[620px] h-[34px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] opacity-[0.3]">
          Click here to view more
        </div>
      </div>
      <div className="absolute top-[120px] left-[61px] w-[1798px] h-[826px] overflow-hidden text-45xl text-gray-400">
        <div className="absolute top-[0px] left-[0px] w-[1670px] h-[826px] overflow-hidden">
          <div className="absolute top-[239px] left-[1292px] w-[378px] h-[348px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_160px)] left-[0px] flex flex-col items-start justify-start gap-[32px_0px]">
              <div className="w-[378px] relative inline-block">
                <span>Choose from</span>
                <span className="text-white"> 100+ Categories</span>
              </div>
              <div className="rounded-881xl overflow-hidden flex flex-row items-center justify-center py-4 px-0 gap-[0px_10px] text-13xl">
                <div className="relative text-transparent !bg-clip-text [background:linear-gradient(86.31deg,_rgba(114,_114,_114,_0),_#ff8db9_30.06%,_#f86e43)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Explore all categories
                </div>
                {/* <img
                  className="w-11 relative max-h-full z-10"
                  alt=""
                  src="https://imgs.search.brave.com/0LXRr3l6vxcvXe7w6Fg8OGKxYuc4wUwqKUfsNXl8Rik/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UTm1NVFEy/WXpNdFl6VTBNUzAw/TlRJMkxUazNNVGd0/T1RJNU1EZ3lORGMz/WkRGa1hrRXlYa0Zx/Y0dkZVFYVnlORFV6/T1RRNU1qWUAuanBn"
                /> */}
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[1213.9px] h-[826px] overflow-hidden text-85xl text-white">
            <div className="absolute top-[0px] left-[0px] w-[1129px] h-[826px] overflow-hidden">
              <img
                className="absolute top-[0px] left-[341px] w-[788px] h-[826px] overflow-hidden"
                alt=""
                src="/frame.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-[418px] h-[546px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[406px] h-[546px] overflow-hidden">
                  <div className="absolute top-[420px] left-[126px] [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0]">
                    Dancers
                  </div>
                </div>
                <div className="absolute top-[0px] left-[49px] w-[369px] h-[489px] overflow-hidden text-center">
                  <div className="absolute top-[337px] left-[0px] w-[369px] h-[152px] overflow-hidden">
                    <div className="absolute top-[calc(50%_-_50px)] left-[0px] z-10">
                      Singers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-881xl border-2 border-white overflow-hidden flex flex-row items-center justify-center py-4 px-0 gap-[0px_10px] text-13xl">
              <img
                className="rounded-full border-2 border-white absolute top-[0px] left-[354px] w-[801.6px] h-[813px] overflow-hidden "
                alt=""
                src="https://imgs.search.brave.com/0LXRr3l6vxcvXe7w6Fg8OGKxYuc4wUwqKUfsNXl8Rik/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UTm1NVFEy/WXpNdFl6VTBNUzAw/TlRJMkxUazNNVGd0/T1RJNU1EZ3lORGMz/WkRGa1hrRXlYa0Zx/Y0dkZVFYVnlORFV6/T1RRNU1qWUAuanBn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
