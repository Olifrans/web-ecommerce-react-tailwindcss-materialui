import Anuncio from "../componentes/Anuncio";
import Categorias from "../componentes/Categorias";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import NewsLetters from "../componentes/NewsLetters";
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
      <NewsLetters />
      <Footer />
    </div>
  );
}

export default Home;
