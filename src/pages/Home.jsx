import Anuncio from "../componentes/Anuncio";
import Categorias from "../componentes/Categorias";
import NavBar from "../componentes/NavBar";
import Produtos from "../componentes/Produtos";
import Sliders from "../componentes/Sliders";

function Home() {
  return (
    <div className="teste">
      <Anuncio />
      <NavBar />
      <Sliders />
      <Categorias />
      <Produtos />
    </div>
  );
}

export default Home;
