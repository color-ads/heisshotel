"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";

import { register } from "swiper/element/bundle";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";
import Link from "next/link";

const SliderHabSmall = () => {
  return (
    <section className="overflow-y-auto">
      <section
        className="bg-center bg-cover w-full h-screen flex flex-col justify-center"
        style={{
          backgroundImage: `url(/images/habitacionSmall/smallPrincipal.jpg)`,
        }}
      >
        <div className="items-center text-center flex flex-col gap-3 text-white">
          <span className="parrafo-light-24 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            HOTEL HEISS MEDELLÍN
          </span>
          <h2 className="h2">ESTÁNDAR</h2>
        </div>
        <div className="mt-5">
          <CalendarWidget />
        </div>
      </section>
      {/* carrousel 1 */}
      <div className="text-white h-3/4 text-center flex items-center w-full">
        <Swiper
          slidesPerView={1}
          className="w-full h-[70%]"
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smallcarrousel.jpg)`,
                width: "100%",
                height: "70vh",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smallcarrousel2.jpg)`,
                width: "100%",
                height: "70vh",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smallcarrousel3.jpg)`,
                width: "100%",
                height: "70vh",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* carrousel 2 */}
      <div className="text-white text-center flex items-center w-full">
        <Swiper
          slidesPerView={1}
          className="w-[55%] h-screen flex flex-col md:flex-row"
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smalldetalles.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smalldetalles2.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-right"
              style={{
                backgroundImage: `url(/images/habitacionSmall/smalldetalles3.jpg)`,
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col w-[45%] gap-10 h-full p-8 md:p-16 items-end justify-end text-right">
          <div className="">
            <h2 className="h5 py-8">ESTÁNDAR</h2>
            <p className="p-light-16 pl-12">
              Bienvenido a nuestra acogedora <b>Habitación Estándar</b> de 20
              metros cuadrados, diseñada para ofrecer confort y funcionalidad.
              Ideal para viajeros que buscan una estancia cómoda y conveniente.
              Aunque esta habitación no cuenta con balcón, su diseño inteligente
              y acogedor garantiza una estancia placentera y relajante. <br />
              ¡Reserva ahora y disfruta de una experiencia cómoda y práctica en
              nuestra Habitación Estándar! Está habitación cuenta con:
            </p>
          </div>
          {/* ICONOS */}

          <div className="flex gap-5 md:gap-9 lg:gap-10 xl:gap-10 justify-end">
            <Image
              src="/icons/camas.svg"
              alt="Camas Queen"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />
            <Image
              src="/icons/wifi.svg"
              alt="Wifi"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/armario.svg"
              alt="Armario"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/ducha.svg"
              alt="Ducha"
              width={40}
              height={62.42}
              className="md:w-[40px] lg:w-[50px]"
            />
          </div>
          <Button as child>
            <Link
              href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
              target="_blank"
            >
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SliderHabSmall;