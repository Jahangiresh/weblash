import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg__black__primary pt-12">
      <section className="pb-12 border-[#232323] border-b-[1px]">
        <div className="w-1/2 max-md:!w-11/12 mx-auto flex flex-col items-center justify-center gap-6">
          <div>
            <h5 className="text-white text-center font-bold text-xl">
              Bizə abunə ol, yeniliklərdən dərhal xəbərdal ol!
            </h5>
          </div>
          <div>
            <input
              type="text"
              className="my__input !shadow-none bg__beige max-md:w-full max-md:mb-3 !px-4 !py-2 !mr-2 placeholder:!font-normal placeholder:!text-base placeholder:!text-[#444444]"
              placeholder="Email adresinizi daxil edin"
            />
            <button className="btn__success !font-medium !text-base max-md:w-full">
              Göndər
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 border-[#232323] border-b-[1px]">
        <div className="container">
          <div className="grid grid-cols-3 max-md:grid-cols-2">
            <div className="">
              <h5 className="font-bold text-xl text-white mb-3">Missiyamız</h5>
              <p className="text-white font-normal text-base">
                Müştəri məmnuniyyəti-bizim əsas prioritetimizdir.Sizlərə münasib
                qiymət və professional IT xidmət təklif edirik.
              </p>
            </div>
            <div className="flex justify-center">
              <div>
                <h5 className="font-bold text-xl text-white mb-3">Weblash</h5>
                <ul>
                  <li className="mb-4 mt-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      ana səhifə
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      haqqımızda
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      xidmətlər
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      komandamız
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      portfolio
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      bloq
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-white font-medium capitalize text-base transition-all ease-in delay-300 hover:border-white hover:border-b-[1px]"
                      to=""
                    >
                      bizimlə əlaqə
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center max-md:justify-start">
              <div>
                <h5 className="font-bold text-xl text-white mb-3">
                  Əlaqə vasitələrimiz
                </h5>
                <ul>
                  <li className="mb-4">
                    <span className="text-white capitalize text-base font-normal">
                      tel:
                    </span>
                    <a
                      className="text-white ml-2 text-base font-normal cursor-pointer"
                      href="tel:+994775067571"
                    >
                      +994 77 506 75 71
                    </a>
                  </li>
                  <li className="mb-4">
                    <span className="text-white capitalize text-base font-normal">
                      whatsapp:
                    </span>
                    <a
                      className="text-white ml-2 text-base font-normal cursor-pointer"
                      href="https://web.whatsapp.com/send?phone=+994775067571&text=Salam"
                    >
                      +994 55 785 78 78
                    </a>
                  </li>
                  <li className="mb-4">
                    <span className="text-white capitalize text-base font-normal">
                      email:
                    </span>
                    <a
                      className="text-white ml-2 text-base font-normal cursor-pointer"
                      href="mailto:+994775067571"
                    >
                      isasadiqli1@gmail.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <ul className="flex align-center justify-between">
                      <li>
                        <Link className="text-white text text-2xl">
                          <FaFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white text text-2xl">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white text text-2xl">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white text text-2xl">
                          <FaWhatsapp />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <div className="flex justify-center align-center">
          <p className="text-white text-base font-normal">
            Copyright © - {new Date().getFullYear()}. Weblash.az
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
