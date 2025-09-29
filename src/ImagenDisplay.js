import { useState } from "react";
import "./App.css";

function ImagenDisplay() {
  const [imageSrc, setImageSrc] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setMessage("No se seleccionó ningún archivo.");
      setImageSrc(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setMessage("El archivo seleccionado no es una imagen.");
      setImageSrc(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
      setMessage("Imagen cargada correctamente");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="card">
      <h2 className="title">Subir una imagen</h2>

      <input
        type="file"
        className="file-input"
        accept="image/*"
        onChange={handleFileChange}
      />

      <div className="message">{message}</div>

      {imageSrc && <img src={imageSrc} alt="Vista previa" className="preview" />}
    </div>
  );
}

export default ImagenDisplay;
