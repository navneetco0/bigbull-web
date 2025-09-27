import React from "react";
import { EventCardType } from "./EventCarousel";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: EventCardType;
  cardWidth: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, cardWidth }) => {
  return (
    <div
      className="aspect-[273/389] bg-[#1B1B1B] p-[7px] sm:p-[8px] flex flex-col gap-[10px] sm:gap-[8px] justify-between "
      style={{ width: cardWidth }}
    >
      <div className="w-full relative aspect-[1]">
        <Image src={event.image} alt={event.artistName} fill />
      </div>
      <div className="flex flex-col justify-between px-[4px] gap-[16px]">
        <div className="flex flex-col gap-[4px] uppercase text-[14.12px] sm:text-[16px]">
          <h3 className="font-[700] sm:font-[600]">{event.artistName}</h3>
          <time
            className="uppercase font-[400]"
            style={{ fontFamily: "TT-Supermolot-Neue-Trial-Expanded" }}
          >
            {event.date}
          </time>
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

export default EventCard;
