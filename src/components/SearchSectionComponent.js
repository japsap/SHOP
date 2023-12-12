"use client";

import React, { useCallback, useEffect, useState } from "react";

import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { sofaSwiper } from "@constants/Data";
import { ProductsSwiper } from "./fixedComponents";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchSectionComponent = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col w-full gap-3 my-5 px-5">
      {/* search for */}
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center ">
        <div className="flex items-center gap-1">
          <h1 className="text-xl text-stone-500">Searching for:</h1>
          <span className="font-bold text-xl underlineText dark:font-light dark:text-2xl">Sofa</span>
        </div>

        <p className="font-bold flex text-stone-400  dark:text-white dark:font-medium items-center gap-3 text-sm">
          <Info className="text-stone-400 dark:text-white" size={16} />
          {sofaSwiper.length} items found based on your search
        </p>
      </div>
      {/* search for */}

      {/* sofias icon */}
      <div className="flex items-center gap-5 mt-5">
        <Image
          src={"/images/icons/sofa.png"}
          width={35}
          height={35}
          className="opacity-[0.5] dark:invert"
          alt="icon image"
        />
        <div className="column">
          <h1 className="text-lg text-stone-500">Welcome!</h1>
          <p className="text-sm text-stone-400">
            Feel free to check out all our sofa's.
          </p>
        </div>
      </div>
      {/* sofias icon*/}

      {/* sofas swiper */}
      <div className="flex flex-col 2xl:flex-row justify-between items-center min-h-[30vh] w-full mt-5">
        <div className="column gap-2 w-full">
          <h1 className="text-4xl leading-tight font-bold text-black">
            Items Based On your search
          </h1>
          <p className="text-stone-400 text-sm md:max-w-[200px]">
            Chic furniture array for a stylish, cozy, and functional space.
          </p>
          <div className="hidden 2xl:flex items-center gap-3 mt-3">
            <div
              className="border-b-2 border-primaryColor  border-r-2 rounded-full p-2 cursor-pointer"
              onClick={handlePrev}
            >
              <ArrowLeft className="" />
            </div>
            <div
              className="border-b-2 border-primaryColor border-l-2 rounded-full p-2 cursor-pointer"
              onClick={handleNext}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
        <ProductsSwiper setSwiperRef={setSwiperRef} />
      </div>
      {/* sofas swiper */}
    </div>
  );
};

export default SearchSectionComponent;
