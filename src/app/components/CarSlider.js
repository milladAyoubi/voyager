"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

import { FaStar, FaStarHalfAlt, FaRegStar, FaFire } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "./varients";

import { Pagination } from "swiper/modules";
import Cars from "./Cars";

const cars = [
  {
    type: "SUV",
    name: "Lexus LX400",
    price: 42,
    stars: 5,
    image: "/images/carSlider/lexus02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Auto",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "286 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "AWD",
      },
    ],
  },
  {
    type: "Crossover",
    name: "Range Rover Evoque",
    price: 48,
    stars: 4.9,
    image: "/images/carSlider/range02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Auto",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "420 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "AWD",
      },
    ],
  },
  {
    type: "SUV",
    name: "Jaguer F-Pace",
    price: 68,
    stars: 5,
    image: "/images/carSlider/jag02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Auto",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "560 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "AWD",
      },
    ],
  },
  {
    type: "Hatchback",
    name: "Audi Q3",
    price: 39,
    stars: 4.5,
    image: "/images/carSlider/audi02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "242 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "FWD",
      },
    ],
  },
  {
    type: "Sport",
    name: "Toyota Supra MkV",
    price: 52,
    stars: 4.9,
    image: "/images/carSlider/supra02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Auto",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "382 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "RWD",
      },
    ],
  },
];

const carsTypes = [
  {
    type: "SUV",

    price: 42,
    stars: 5,
    image: "/images/carSlider/lexus02.png",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Auto",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Petrol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "286 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "AWD",
      },
    ],
  },
];
export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto cursor-pointer mt-12"
    >
      <Swiper
        style={{
          "--swiper-pagination-color": "#ed1d24",
          "--swiper-pagination-bullet-inactive-color": "#888888",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="lg:h-[600px] h-[580px] "
        breakpoints={{
          760: { slidesPerView: 1, spaceBetween: 32 },
          800: { slidesPerView: 2, spaceBetween: 12 },
          1080: { slidesPerView: 3, spaceBetween: 22 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="lg:max-w-[380px] mx-auto  sm:mx-0 p-4 rounded-2lg">
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  className="hover:scale-105 transition-all duration-300"
                  alt=""
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {" "}
                      {car.type}{" "}
                    </div>{" "}
                    <h3 className="text-lg uppercase font-bold">
                      {" "}
                      {car.name}{" "}
                    </h3>{" "}
                    <div className="mb-10 font-light uppercase">
                      {" "}
                      $ {car.price}
                      /day
                    </div>
                  </div>{" "}
                  <div className="flex gap-x-2 relative right-7">
                    <p className="font-medium text-black/30"> {car.stars} </p>{" "}
                    <FaStar className="text-[21px] text-amber-500/90" />
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-x-3 lg:gap-x-4 w-max mb-10">
                  {" "}
                  {car.info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-y-1"
                      >
                        <div className="bg-primary/90 w-10 h-10 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </div>{" "}
                        <div className="text-[12px] uppercase">
                          {" "}
                          {item.text}{" "}
                        </div>{" "}
                      </div>
                    );
                  })}{" "}
                </div>{" "}
                <button className="btn btn-accent btn-lg">
                  {" "}
                  View Details{" "}
                </button>{" "}
              </div>{" "}
            </SwiperSlide>
          );
        })}{" "}
      </Swiper>
    </motion.div>
  );
}
