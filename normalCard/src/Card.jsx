import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="min-h-screen w-full bg-[#111] p-[30px] flex gap-[30px] flex-wrap">

      <div
        className="bg-white rounded-[30px] p-[30px] w-[280px] h-[370px]
                   flex flex-col justify-between
                   hover:-translate-y-2 hover:shadow-2xl
                   transition-all duration-300"
      >
        {/* TOP */}
        <div className="flex items-start justify-between mb-[30px]">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?pid=Api&P=0&h=180"
            alt="logo"
            className="w-[42px] h-[42px] rounded-full border border-[#dadada] p-[2px] object-cover"
          />

          <button
            className="flex items-center gap-1 border border-[#dadada]
                       px-2 py-1 rounded-sm text-[12px] text-[#8b8b8b]"
          >
            Saved <Bookmark size={16} />
          </button>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-[17px] font-medium">
            Google{" "}
            <span className="text-[14px] text-[#aeaeae]">
              · 30 days ago
            </span>
          </h3>

          <h2 className="text-[22px] font-medium mt-1">
            Graphic Designer
          </h2>

          <div className='flex gap-2 mt-[10px]'>
            <span className="text-[12px] px-2 py-1 bg-[#e4e4e4] rounded">
              Full-time
            </span>
            <span className="text-[12px] px-2 py-1 bg-[#e4e4e4] rounded">
              Flexible
            </span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center border-t pt-3">
          <div>
            <h3 className="text-[18px] font-medium">$150–220k</h3>
            <p className="text-[13px] text-[#aeaeae]">
              Mountain View, CA
            </p>
          </div>

          <button
            className="bg-[#121212] text-white px-3 py-1 rounded text-[13px]"
          >
            Apply Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
