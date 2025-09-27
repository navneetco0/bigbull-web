"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-6 sm:top-10 px-[24px] flex w-full justify-center z-[100]"
    >
      <div
        className="
          w-full sm:max-w-[754px] h-full
          flex flex-col
          rounded-[44px]
          py-[16px]
          transition-transform duration-150 ease-in-out
        "
        style={{
          backdropFilter: "blur(32px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          background:
            "linear-gradient(152.4deg, rgba(255, 255, 255, 0.12) 15.6%, rgba(255, 255, 255, 0.06) 81.6%)",
        }}
      >
        <div className="flex justify-between items-center px-[24px] sm:px-[32px]">
          <Link href={"/"}>
            <div className="relative w-[61.33] h-[32] sm:w-[103.5] sm:h-[54]">
              <Image
                src="/images/big-bull-light-logo.png"
                fill
                className="Object-contain"
                alt="Big Bull company light logo"
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="
              w-10 h-10 flex flex-col justify-center items-center space-y-1
              transition-transform duration-150 ease-in-out
              active:scale-90 active:opacity-80
            "
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Animated Expanding Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isMenuOpen ? "auto" : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-[29px] sm:gap-[32px] mt-[29px] sm:mt-[32px] items-center"
            >
              <div
                style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
                className="uppercase text-center text-[20px] font-[800] sm:text-[28.61px] text-[#7A7A7A] leading-[38.06px] sm:leading-[38.06px]"
              >
                <h4>All Events</h4>
                <h4>About us</h4>
              </div>
              <div className="w-full">
                <EventsCarousel
                  events={events}
                  cardWidthMobile={240.88}
                  cardWidthDesktop={273}
                  gap={16.22}
                  interval={3000}
                />
              </div>
              <p
                style={{ fontFamily: "TT-Supermolot-Neue-Trial-Extended" }}
                className="text-center text-[14px] font-[600] sm:font-[500] sm:text-[16px] text-[#FFFFFF] leading-[38px] sm:leading-[38px]"
              >
                @2025 BigBull All Rights Reserved
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
