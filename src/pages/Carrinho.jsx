import React from "react";
import Anuncio from "../componentes/Anuncio";
import Counter from "../componentes/Counter";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import NewsLetters from "../componentes/NewsLetters";

const Carrinho = () => {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
      <Anuncio />
      <NavBar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Carrinho</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0">
            Continue comprando
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Itens da lista de desejos: 0</p>
          </div>
          <button className="btn mt-0">Checkout Now</button>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Produto:</b>Camisa C??u Deslumbrante
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Cor:</b>
                    <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70R$</b>
                </p>
              </div>
            </div>

            <hr className="mb-7 mt-7 mobile:mt-0" />
            {/* 2nd product div */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Produto:</b>Camisa C??u Deslumbrante
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Color:</b>
                    <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Tamanho:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70R$</b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />

            {/* 3rd Product */}
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Produto:</b>Camisa C??u Deslumbrante
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Color:</b>
                    <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Tamanho:</b>M
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70R$</b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />
          </div>
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">RESUMO</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>R$140</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Valor do frete:</p>
              <p>R$10</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Desconto no frete:</p>
              <p>-R$10</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>R$140</p>
            </div>
          </div>
        </div>
        <NewsLetters />
        <Footer />
      </div>
    </div>
  );
};

export default Carrinho;
