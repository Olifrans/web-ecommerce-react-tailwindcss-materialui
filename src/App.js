import CategoriaPage from "./pages/CategoriaPage";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProdutoPage from "./pages/ProdutoPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Login />
      <Register /> */}
      <CategoriaPage />
      <Carrinho />
      <ProdutoPage />
     
    </div>
  );
}

export default App;
