import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const Produto = ({ item }) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const styleIcon =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  const handleHoverEnter = () => {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffects(" opacity-0");
  };
  return (
    <div
      className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px]
       m-2 overflow-hidden rounded-md shadow-lg relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product" />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        {/* Icones */}
        <div className={styleIcon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styleIcon}>
          <FavoriteBorderOutlined />
        </div>
        <div className={styleIcon}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Produto;
