import React from "react";
import Anuncio from "../componentes/Anuncio";
import Categorias from "../componentes/Categorias";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import NewsLetters from "../componentes/NewsLetters";
import Produtos from "../componentes/Produtos";
import Sliders from "../componentes/Sliders";

const Carrinho = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";

  return (
    <div>
      <Anuncio />
      <NavBar />
      <Sliders />
      <Categorias />
      <Produtos />
      <NewsLetters />
      <Footer />
    </div>
  );
};

export default Carrinho;
