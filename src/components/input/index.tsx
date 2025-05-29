import React, { useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const eventos = [
  {
    imageSrc: "https://www.todopass.com.ar/585-home_default/abril-sosa.jpg",
    title: "Abril Sosa", // Modificado para tener títulos únicos para slugs
    date: "Sabado 5 de julio",
    location: "Córdoba Capital",
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/584-home_default/gran-gala-de-ballet-en-trelew.jpg",
    title: "Gran Gala de Ballet en Trelew",
    date: "Sabado 5 de julio",
    location: "Villa Carlos Paz",
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/582-home_default/gran-gala-de-ballet.jpg",
    title: "Gran Gala de Ballet",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/576-home_default/fabian-vena-presenta-quien-soy-yo.jpg",
    title: "Fabian Vena Presenta Quien Soy Yo",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/575-home_default/caligula-un-musical-de-pepe-cibrian-.jpg",
    title: "Caligula un Musical de Pepe Cibrian",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc: "https://www.todopass.com.ar/573-home_default/tandilia-trail.jpg",
    title: "Tandilia Trail", // Título que coincide con la imagen
    date: "Domingo 17 de Agosto", // Fecha específica de la imagen
    location: "Parque de la Industria Larrea, B7000", // Ubicación específica de la imagen
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/572-home_default/adrian-barilari-canciones-doradas-ii.jpg",
    title: "Adrian Barilari Canciones Doradas II",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc: "https://www.todopass.com.ar/568-home_default/vieja-minga-.jpg",
    title: "Vieja Minga",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc: "https://www.todopass.com.ar/580-home_default/tandil-ab-20.jpg",
    title: "Tandil AB 20",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc: "https://www.todopass.com.ar/567-home_default/piti-fernandez.jpg",
    title: "Piti Fernandez",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc:
      "https://www.todopass.com.ar/563-home_default/lisandro-aristimuno.jpg",
    title: "Lisandro Aristimuno",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
  {
    imageSrc: "https://www.todopass.com.ar/519-home_default/la-beriso.jpg",
    title: "La Beriso",
    date: "Sabado 5 de julio",
    location: "Alta Gracia",
  },
];

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const eventosFiltrados = eventos.filter(
    (evento) =>
      evento.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" className="search-button">
        <SearchIcon fontSize="small" />
      </button>

      {searchTerm.trim() !== "" && eventosFiltrados.length > 0 && (
        <div className="search-results-dropdown">
          {eventosFiltrados.map((evento, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => console.log("hola")}
              style={{ cursor: "pointer" }}
            >
              <div className="search-result-image-wrapper">
                <Image
                  src={evento.imageSrc}
                  alt={evento.title}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="search-result-info">
                <span className="search-result-title">{evento.title}</span>
                <span className="search-result-sub">
                  {evento.date} – {evento.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
