import React from "react";
import { ApiCategoria } from "../apifolder/CategoriaApi";
import Categoria from "./Categoria";

function Categorias() {
  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col">
      {ApiCategoria.map((category, index) => {
        return <Categoria item={category} key={index} />;
      })}
    </div>
  );
}

export default Categorias;
