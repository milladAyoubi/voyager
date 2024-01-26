"use client";
import Image from "next/image";
import React, { useContext } from "react";
import SearchAuto from "./SearchAuto";
import { SearchContext } from "./SearchContext";
import { FaChevronDown, FaChevronCircleDown } from "react-icons/fa";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "./varients";
import { Link } from "react-scroll";
export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen lg:h-[90vh]" id="home">
      <div className="container mx-auto  h-full ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-x-0 lg:justify-start h-full">
          <div className="text-center lg:max-w-[700px] xl:max-w-[900px] lg:text-left mt-16  lg:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore The{" "}
              <span className="text-accent">Finest Global Offers</span> With
              Voyager
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto lg:mx-0 mb-6 lg:m-6"
            >
              Find your ideal ride for any adventure you desire. With our
              diverse range of vehicles for any occasion.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center lg:justify-start"
            >
              <button
                className=" bg-accent hover:bg-accent-hover
                rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]"
              >
                <Link
                  to={"cars"}
                  smooth={true}
                  spy={true}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-x-2">
                    View Collection
                    <FaChevronCircleDown className="text-[18px]" />
                  </div>
                </Link>
              </button>
              <button className="btn-cta hidden">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                ></Image>
              </button>
              <button className="btn-cta hidden">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                ></Image>
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative overflow-hidden w-full lg:h-full h-[40%] max-w-[50vh] md:max-w-[70vw] lg:max-w-[1280px] lg:max-h-[452px] lg:absolute min-[80px] right-[0px] lg:top-38  "
          >
            <Image
              src={"/images/hero/car.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
              className="lg:!left-[600px] lg:fixed"
            ></Image>
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <SearchAuto />
        </div>
      ) : (
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="-mt-12 w-full max-w-[1300px] mx-auto"
        >
          <SearchAuto />
        </motion.div>
      )}
    </section>
  );
}
