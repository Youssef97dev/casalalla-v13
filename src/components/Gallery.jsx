import React from "react";
import Image from "next/image";
import Link from "next/link";

const imagesUrl = [
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/casa%20Lalla/gall2_vduxjy",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/casa%20Lalla/L-167_uhoybh",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/casa%20Lalla/casa-sunset_s64zzp",
];

const Gallery = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center space-x-2 py-2">
        {imagesUrl.map((image, index) => (
          <Link
            key={index}
            href="/gallery"
            target="_blank"
            className="cursor-pointer"
          >
            <div className="relative">
              <Image
                src={image}
                alt="casa lalla takerkoust gallery"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery" className="cursor-pointer">
        <div className="flex h-full w-full justify-center items-center  relative md:hidden">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf"
            alt="casa lalla tekerkoust gallery"
            width={600}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="z-10 absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-35"></div>
          <span className="absolute w-full h-full flex justify-center items-center text-4xl text-white z-20">
            GALLERY
          </span>
        </div>
      </Link>
    </>
  );
};

export default Gallery;
