import React, { useState } from "react";
import { createPortal } from "react-dom";
import { PropTypes } from "prop-types";
import ModalContent from "./ModalContent";

const stylesClassName = {
  li: "relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform",
  h2: "absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded",
  img: "w-full h-full object-cover rounded",
};

export default function ListCard({ country }) {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <li
        className={stylesClassName.li}
        onClick={handleToggleModal}
        role='presentation'
      >
        <h2 className={stylesClassName.h2}>{country.name.common}</h2>
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className={stylesClassName.img}
        />
      </li>
      {showModal &&
        createPortal(
          <ModalContent country={country} closeModal={handleToggleModal} />,
          document.querySelector("#modal")
        )}
    </>
  );
}

ListCard.propTypes = {
  country: PropTypes.object,
};
