import React from "react";
import instagramIcon from "../instagram.png";
import whatsappIcon from "../whatsapp.png";
import tiktokIcon from "../tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-[#184548] py-4  mr-3 px-3 py-2 ">
      <div className=" flex justify-content-around">
        <div className="flex space-x-4 justify-content-center">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 " />
          </a>
          <a href="https://wa.me" target="_blank" rel="noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
          </a>
        </div>
        <div className="mb-2  flax items-center justify-content-start">
          <p className="text-white  ">
            &copy; Copy right 2024 TRIDISH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
