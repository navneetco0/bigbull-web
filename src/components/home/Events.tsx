import Link from "next/link";
import EventsCarousel from "../ui/EventCarousel";

const events = [
  {
    id: 1,
    artistName: "futur",
    date: "22nd aug, 2025",
    image: "/images/temp/event-artist-1.png",
  },
  {
    id: 2,
    artistName: "TEJMUSIC VODKA",
    date: "4TH JUL, 2025",
    image: "/images/temp/event-artist-2.png",
  },
  {
    id: 3,
    artistName: "futur",
    date: "26th JUN, 2025",
    image: "/images/temp/event-artist-3.png",
  },
  {
    id: 4,
    artistName: "FLOYD LAVINE KAYVEE",
    date: "22nd May, 2025",
    image: "/images/temp/event-artist-4.png",
  },
];

export default function Events() {
  return (
    <section className="my-[40px] sm:my-[170px]">
      <div
        className="max-w-[1140px] mb-[24px] sm:mb-[40px] p-[24px] flex justify-between uppercase mx-auto items-center"
        style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
      >
        <h2 className="text-[16px] sm:text-[34px] text-white font-[800] ">
          Upcoming Events
        </h2>
        <Link href={"/all-events"}>
          <span className="hidden sm:block sm:font-[800] sm:text-[16px] text-[#C5F832]">
            View All Events
          </span>
          <span
            className="sm:hidden font-[700] text-[12px] text-[#C5F832]"
            style={{ fontFamily: "TT-Supermolot-Neue-Trial-Condensed" }}
          >
            View All Events
          </span>
        </Link>
      </div>
      <EventsCarousel
        events={events}
        cardWidthMobile={240.88}
        cardWidthDesktop={273}
        gap={16}
        interval={3000}
      />
    </section>
  );
}
