import React from "react";
import { PropTypes } from "prop-types";

const stylesClassName = {
  modal:
    "fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center",
  boxInfos: "min-w-[500px] relative rounded p-7 bg-gray-50",
  closeButton:
    "absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded",
  boxTitle: "text-2xl mb-4",
  boxItem: "text-lg mb-2",
  boxItemTitle: "font-semibold",
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
        <h3 className={stylesClassName.boxTitle}>
          Official Name: {country.name.official}
        </h3>
        <p className={stylesClassName.boxItem}>
          <span className={stylesClassName.boxItemTitle}>Capital:</span>{" "}
          {country.capital}
        </p>
        <p className={stylesClassName.boxItem}>
          <span className={stylesClassName.boxItemTitle}>Language(s):</span>{" "}
          {Object.values(country.languages).join(", ")}
        </p>
        <p className={stylesClassName.boxItem}>
          <span className={stylesClassName.boxItemTitle}>Area:</span>{" "}
          {country.area}Km²
        </p>
        <p className={stylesClassName.boxItem}>
          <span className={stylesClassName.boxItemTitle}>Residents:</span>{" "}
          {country.demonyms.eng.f}
        </p>
        <p className={stylesClassName.boxItem}>
          <span className={stylesClassName.boxItemTitle}>Population:</span>{" "}
          {country.population} res.
        </p>
      </div>
    </div>
  );
}
ModalContent.propTypes = {
  country: PropTypes.object,
  closeModal: PropTypes.func,
};
