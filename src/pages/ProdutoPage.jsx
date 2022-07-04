import React from "react";
import Anuncio from "../componentes/Anuncio";
import Counter from "../componentes/Counter";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import NewsLetters from "../componentes/NewsLetters";

const ProdutoPage = () => {
  return (
    <div>
      <Anuncio />
      <NavBar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Casaco de Moletom
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            A dor em si, a dor deve ser implementada no processo adipísico
            principal. Felicidades acusando-nos de culpa, ou de sermos
            complacentes. Vida para quem e para quem Eu virei com alguma dor e
            dor. O álbum inteiro odeia as consequências não ei escolhas!
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Preço: <b>R$70</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
              Nas Cores
              <div className="colorSelect bg-red-600 "></div>
              <div className="colorSelect bg-blue-600 "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div>

            <div className="mt-7 text-2xl">
              Tamanhos
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Selecione</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3">
            Adicione ao carrinho
          </button>
        </div>
      </div>
      <NewsLetters />
      <Footer />
    </div>
  );
};

export default ProdutoPage;
