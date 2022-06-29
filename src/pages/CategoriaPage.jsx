import React from "react";
import Anuncio from "../componentes/Anuncio";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import NewsLetters from "../componentes/NewsLetters";
import Produtos from "../componentes/Produtos";

const CategoriaPage = () => {
  return (
    <div>
      <Anuncio />
      <NavBar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Masculino</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filtrar por</p>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              <option selected disabled>
                Tamanho
              </option>
              <option>Pequeno</option>
              <option>Médio</option>
              <option>Grande</option>
              <option>Extra Grande</option>
            </select>

            <select className="ml-3 border-2 border-silver mobile:ml-0">
              <option selected disabled>
                Cor
              </option>
              <option>Amarelo</option>
              <option>Azul</option>
              <option>Vermelho</option>
              <option>Verde</option>
            </select>
          </div>
          <div className="flex mobile:flex-col mobile:items-end">
            <p>Ordenar por</p>
            <select className="ml-3 border-2 border-silver">
              <option selected>Mais recente (primeiro)</option>
              <option>Mais antigo (primeiro)</option>
              <option>Preço (asc)</option>
              <option>Preço (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Produtos />
      <NewsLetters />
      <Footer />
    </div>
  );
};

export default CategoriaPage;
