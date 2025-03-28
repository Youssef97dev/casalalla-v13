"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaDivide,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="w-full min-h-[60vh] flex md:flex-row flex-col-reverse"
    >
      <div className="relative w-full">
        <Image
          src="/Plant-1.png"
          height={1000}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full min-h-[60vh]">
        <div className="w-full p-5 lg:p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center bg-background_2 lg:p-20 p-5 font-medium">
            <img
              src="/logo-10.png"
              alt="Logo Casa lalla"
              className={`w-52 h-28`}
            />
            <p className="text-[11px] leading-[30px] uppercase text-secondary_2">
              {t("contact.title")}
            </p>
            <p className="text-[11px] leading-[30px] uppercase text-secondary_2">
              {t("contact.open")}
            </p>
            <div className="text-[11px] leading-[30px] uppercase text-secondary_2 flex justify-center items-center gap-2">
              <span>Email : </span>
              <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
            </div>
            <div className="text-[11px] leading-[30px] uppercase text-secondary_2 flex justify-center items-center gap-2">
              <span>Tel :</span>
              <Link href="#">{`+212 675-480103`}</Link>
            </div>
            <div className="w-full text-black py-4 flex justify-center items-center text-secondary_2 gap-3">
              <Link href="http://wa.me/212675480103" target="_blank">
                <FaWhatsappSquare color="#a1676b" size={25} />
              </Link>
              <Link
                href="https://www.instagram.com/casa.lalla.takerkoust/"
                target="_blank"
              >
                <FaInstagramSquare color="#a1676b" size={25} />
              </Link>
              <Link
                href="mailto:reservations@casalallatakerkoust.com"
                target="_blank"
              >
                <FaMailBulk color="#a1676b" size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
