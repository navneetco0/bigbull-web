import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EventCardType } from "../ui/EventCarousel";

interface AllEventCardProps {
  event: EventCardType;
}

const AllEventCard: React.FC<AllEventCardProps> = ({ event }) => {
  return (
    <div className="bg-[#1B1B1B] w-full p-[7px] sm:p-[8px] flex flex-col gap-[10px] sm:gap-[8px] justify-between ">
      <div className="w-full relative aspect-[1]">
        <Image src={event.image} alt={event.artistName} fill />
      </div>
      <div className="flex flex-col justify-between px-[4px] gap-[16px]">
        <div className="flex flex-row gap-[4px] uppercase text-[14.12px] sm:text-[16px] justify-between">
          <div>
            <h3 className="font-[700] sm:font-[600]">{event.artistName}</h3>
            <time
              className="uppercase font-[600] text-[12px] text-[#8D8B8B]"
              style={{ fontFamily: "TT-Supermolot-Neue-Trial-Variable" }}
            >
              07:00 PM
            </time>
          </div>
          <div className="border border-[#666666] flex flex-col rounded-[6px] text-center">
            <div className="bg-[#666666] px-[10px] py-[5px] font-[600] text-white text-[10px]">
              2015
            </div>
            <div
              className="text-[10px] font-[700]  p-[2px]"
              style={{ fontFamily: "TT-Supermolot-Neue-Trial-Expanded" }}
            >
              <div>29</div>
              <div>JUNE</div>
            </div>
          </div>
        </div>
        <Link href={`/ticket-details/${event.id}`}>
          <div className="bg-[#C5F832] w-full h-[33.66px] sm:h-[44px] border border-[#585858] flex justify-center items-center">
            <span className="uppercase text-[12.36px] sm:text-[14px] text-[#1A1A1A] font-[800] sm:font-[700] leading-[57.38px] sm:leading-[65px]">
              get tickets
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllEventCard;
