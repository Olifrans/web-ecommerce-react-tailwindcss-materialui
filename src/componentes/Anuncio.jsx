import { Close } from "@mui/icons-material";
import { useState } from "react";
//import CloseIcon from "@mui/icons-material/Close";

function Anuncio() {
  const [anuncioStyle, setAnuncioStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center "
  );

  const handleClose = () => {
    setAnuncioStyle(anuncioStyle + " hidden");
  };

  return (
    <div className={anuncioStyle}>
      <h2>Ofertas com 40% de descontos nas compras online</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Anuncio;
