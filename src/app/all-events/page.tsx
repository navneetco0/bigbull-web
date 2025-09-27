import AllEventCard from "@/components/all-events/AllEventCard";
import React from "react";

const events = [
  {
    id: 1,
    artistName: "futur",
    date: "22nd Aug, 2025",
    image: "/images/temp/event-artist-1.png",
  },
  {
    id: 2,
    artistName: "TEJMUSIC VODKA",
    date: "4th Jul, 2025",
    image: "/images/temp/event-artist-2.png",
  },
  {
    id: 3,
    artistName: "futur",
    date: "26th Jun, 2025",
    image: "/images/temp/event-artist-3.png",
  },
  {
    id: 4,
    artistName: "FLOYD LAVINE KAYVEE",
    date: "22nd May, 2025",
    image: "/images/temp/event-artist-4.png",
  },
  {
    id: 5,
    artistName: "futur",
    date: "22nd Aug, 2025",
    image: "/images/temp/event-artist-1.png",
  },
  {
    id: 6,
    artistName: "TEJMUSIC VODKA",
    date: "4th Jul, 2025",
    image: "/images/temp/event-artist-2.png",
  },
  {
    id: 7,
    artistName: "futur",
    date: "26th Jun, 2025",
    image: "/images/temp/event-artist-3.png",
  },
  {
    id: 8,
    artistName: "FLOYD LAVINE KAYVEE",
    date: "22nd May, 2025",
    image: "/images/temp/event-artist-4.png",
  },
];

const AllEvents = () => {
  return (
    <section
      className="relative py-[112px] px-[24px] sm:py-[213px] sm:px-[10%]"
      style={{
        backgroundImage: "url('/images/home/bg-image-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(197, 248, 50, 0.44) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1
          className="uppercase text-center sm:text-left text-[#DADADA] -tracking-[8%] leading-[40px] font-[800] text-[20px] sm:text-[46px]"
          style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
        >
          Browse All Events
        </h1>
        <div className="mt-[15px] sm:mt-[50px] grid grid-cols-2 md:grid-cols-3 gap-[16px]">
          {events.map((event) => (
            <AllEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
