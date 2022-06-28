import React from "react";

import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Twitter,
  GitHub,
  WhatsApp,
} from "@mui/icons-material/";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">Olifrans o Rei do Verão</h1>
        <p>
          Software Developer C#, NetCore, WebApi, JavaScript, NodeJs, React, Sql
          Sever, PostgreSQL, MySQL e MongoDB.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-purple-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-gray-900`}>
            <GitHub />
          </div>

          <div className={socialStyle + ` bg-green-900`}>
            <WhatsApp />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined className="text-[#8a4af3]" />
          <p className="pl-3">São Paulo - Brasil</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <p className="pl-3">+55 11-98704-1701</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-[#8a4af3]" />
          <p className="pl-3">Fransoliveira@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
