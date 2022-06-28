import React from "react";
import { Send } from "@mui/icons-material/";

const NewsLetters = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]">
      <h1 className="text-[55px] font-bold">
        Boletim Informativo - Rei do Verão
      </h1>
      <h2 className="text-[28px] mt-2 mobile:text-center mobile:p-3">
        Cadastre-se para receber Promoções e Descontos exclusivos
      </h2>
      <div className="flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        
        <input
          className="border-none pl-[20px] flex-[8]"
          type="email"
          placeholder="Digite seu email"
        />
        <button className="bg-[#4caf50] flex-1">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetters;
