"use client";
import { useState } from "react";
import Popup from "./Popup";

const Daypass = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full h-screen text-center flex flex-col justify-center items-center gap-8 px-3 lg:px-40 py-5 lg:py-28 text-secondary_2 ">
        <h1 className="text-[28px] lg:text-[60px] leading-[42.56px] lg:leading-[73.92px] mt-14 font-light uppercase">{`Unlock Your Day - Exclusive Pass and Gourmet Lunch`}</h1>
        <div className="w-full  flex flex-col justify-center items-center gap-4">
          <p className="text-[15px] leading-[22.5px]">{`Visit our restaurants, relax at our 50m olympic sized pool and enjoy lunch. Pool bed & towels included.`}</p>
          <p className="text-[15px] leading-[22.5px]">{`60.00 euro / 600.00 dhs`}</p>
          <p className="italic">{`*Adults Only*`}</p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="text-[15px] px-16 py-4 lg:py-7 border border-secondary_2 rounded mt-5 lg:mt-20 hover:bg-secondary_2 hover:text-white transition-all duration-100"
        >
          BOOK DAY PASS
        </button>
      </div>
      <Popup openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Daypass;
