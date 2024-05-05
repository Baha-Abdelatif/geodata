import React from "react";
import { PropTypes } from "prop-types";

const stylesClassName = {
  modal:
    "fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center",
  boxInfos: "min-w-[500px] relative rounded p-7 bg-gray-50",
  closeButton:
    "absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded",
  boxTitle: "text-2xl mb-4",
};

export default function ModalContent({ country, closeModal }) {
  return (
    <div className={stylesClassName.modal} onClick={closeModal}>
      <div
        className={stylesClassName.boxInfos}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={stylesClassName.closeButton} onClick={closeModal}>
          X
        </button>
        <h2 className={stylesClassName.boxTitle}>
          Informations about {country.name.common}
        </h2>
        <h3>Official Name: {country.name.official}</h3>
        <p>Capital: {country.capital}</p>
        <p>Language: {Object.values(country.languages).join(", ")}</p>
        <p>Area: {country.area}Km²</p>
        <p>Residents: {country.demonyms.eng.f}</p>
        <p>Population: {country.population}</p>
      </div>
    </div>
  );
}
ModalContent.propTypes = {
  country: PropTypes.object,
  closeModal: PropTypes.func,
};
