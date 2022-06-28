import React from "react";
import { ProdutosTopDezApi } from "../apifolder/ProdutosTopDezApi";
import Produto from "./Produto";

function Produtos() {
  return (
    <div className="p-5 flex flex-wrap">
      {ProdutosTopDezApi.map((product, index) => (
        <Produto item={product} key={index} />
      ))}
    </div>
  );
}

export default Produtos;
