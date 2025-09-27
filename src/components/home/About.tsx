"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const About: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    // ✅ Safe window usage
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      scrollY.current = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            const progress = Math.max(
              0,
              Math.min(1, -sectionTop / (sectionHeight - windowHeight))
            );
            setScrollProgress(progress);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = `rgb(${255 - Math.floor(scrollProgress * 255)}, ${
    255 - Math.floor(scrollProgress * 255)
  }, ${255 - Math.floor(scrollProgress * 255)})`;

  const isDark = 255 - Math.floor(scrollProgress * 255) <= 100;

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative h-[172vh] w-full overflow-hidden text-white px-6 md:px-24"
      >
        <div className="absolute top-0 left-0 w-full h-[175vh] bg-black/85 -z-5 " />

        <div className="absolute top-0 pb-6 left-0 w-full h-[172vh] object-cover z-[1] ">
          <Image
            src={"/images/home/bg-image-1.png"}
            alt="background image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 pb-6 left-0 w-full h-[172vh] z-[2] flex justify-center items-center">
          <div className="relative w-[120%] sm:w-[66.67%] aspect-[1]">
            <Image
              src={"/images/home/big-bull-mask.svg"}
              alt="background image 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute top-0 pb-6 left-0 w-full h-[172vh] z-[2] flex justify-center items-center">
          <Image
            src={"/images/home/Ellipse.svg"}
            alt="background image 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="sticky top-0 w-full h-screen z-[3]">
          <div className="absolute inset-0 flex items-start justify-center z-10 mt-32">
            <h2
              className={`text-5xl lg:text-6xl font-extrabold leading-tight text-center transition-colors duration-200`}
              style={{
                color: textColor,
                transform: `translateY(${scrollProgress * 100}vh)`,
                WebkitTextStroke: isDark ? "2px white" : "0px transparent",
                paintOrder: "stroke fill",
                fontFamily: "TT-Supermolot-Neue-Trial-Extended",
              }}
            >
              ABOUT <br /> BIG BULL
            </h2>
          </div>

          <div className="absolute inset-0 z-20">
            {/** Cards **/}
            {[
              {
                topMobile: "50%",
                topDesktop: "10%",
                leftDesktop: "5%",
                title: "1,500+",
                desc: "Venue Capacity",
                iconTop: "/images/home/big-bull-logo.png",
              },
              {
                topMobile: "90%",
                topDesktop: "70%",
                leftDesktop: "50%",
                title: "200+",
                desc: "Backstage Capacity",
                iconTop: "/images/home/big-bull-logo.png",
              },
              {
                topMobile: "130%",
                topDesktop: "120%",
                rightDesktop: "5%",
                title: "100+",
                desc: "Tables",
                iconTop: "/images/home/big-bull-logo.png",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="absolute rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-44 h-60 md:w-64 md:h-80 transform -translate-x-[1/2]"
                style={{
                  top: isMobile ? card.topMobile : card.topDesktop,
                  left: card.leftDesktop,
                  right: card.rightDesktop,
                  backdropFilter: "blur(20px)",
                  border: "1px solid #FFFFFF4D",
                  transform: idx === 1 ? "translateX(-50%)" : "",
                }}
              >
                <div className="relative h-full p-4 md:p-6 flex flex-col justify-between bg-black/50">
                  <div className="flex justify-start">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <Image
                        src={card.iconTop}
                        alt="Icon"
                        height={103}
                        width={103}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className="text-2xl md:text-4xl font-bold mb-2"
                      style={{
                        fontFamily: "TT-Supermolot-Neue-Trial-Extended",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm md:text-lg text-gray-200"
                      style={{ fontFamily: "TT-Supermolot-Neue-Trial" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
