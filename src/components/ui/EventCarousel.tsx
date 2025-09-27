"use client";
import React, { useEffect, useRef, useState } from "react";
import EventCard from "./EventCard";

export interface EventCardType {
  id: number;
  artistName: string;
  date: string;
  image: string;
}

interface CarouselProps {
  events: EventCardType[];
  cardWidthMobile: number; // e.g. 220
  cardWidthDesktop: number; // e.g. 320
  gap: number; // e.g. 16
  interval?: number; // ms (default: 3000)
  breakpoint?: number; // px, default 640
}

const EventsCarousel: React.FC<CarouselProps> = ({
  events,
  cardWidthMobile,
  cardWidthDesktop,
  gap,
  interval = 3000,
  breakpoint = 640,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(cardWidthDesktop);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate events for infinite scroll
  const doubledEvents = [...events, ...events];

  // calculate parent width & card width relative to parent
  useEffect(() => {
    const updateSize = () => {
      if (parentRef.current) {
        const width = parentRef.current.offsetWidth;
        setParentWidth(width);

        // ✅ use parent width instead of window width
        setCardWidth(width < breakpoint ? cardWidthMobile : cardWidthDesktop);
      }
    };

    updateSize();

    // listen only to resize of parent (via ResizeObserver)
    const observer = new ResizeObserver(updateSize);
    if (parentRef.current) observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [cardWidthMobile, cardWidthDesktop, breakpoint]);

  const carouselWidth = events.length * (cardWidth + gap);
  const needCarousel = carouselWidth > parentWidth;

  // Auto scroll if needed
  useEffect(() => {
    if (!needCarousel) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, interval);
    return () => clearInterval(timer);
  }, [needCarousel, interval]);

  // Reset position when reaching second set
  useEffect(() => {
    if (!needCarousel) return;
    if (activeIndex === doubledEvents.length - events.length) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [activeIndex, events.length, doubledEvents.length, needCarousel]);

  return (
    <div>
      <div
        ref={parentRef}
        className="relative overflow-hidden w-full flex justify-center"
      >
        {/* Inner carousel */}
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: needCarousel
              ? `translateX(${
                  parentWidth / 2 -
                  (activeIndex * (cardWidth + gap) + cardWidth / 2)
                }px)`
              : "translateX(0)",
            gap: `${gap}px`,
          }}
        >
          {doubledEvents.map((event, idx) => (
            <EventCard
              event={event}
              key={`${event.id}-${idx}`}
              cardWidth={cardWidth}
            />
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      {needCarousel && (
        <div className="flex justify-center mt-6 gap-2">
          {events.map((_, i) => (
            <div
              key={i}
              className={`h-[9px] rounded-full transition-all duration-500 ${
                i === activeIndex % events.length
                  ? "bg-white w-[66px]"
                  : "bg-[#484848] w-[9px]"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCarousel;
