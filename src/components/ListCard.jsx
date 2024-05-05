import React from "react";

export default function ListCard({ country }) {
  const stylesClassName = {
    li: "relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform",
    h2: "absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded",
    img: "w-full h-full object-cover rounded",
  };
  return (
    <li className={stylesClassName.li}>
      <h2 className={stylesClassName.h2}>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`The ${country.demonyms.eng.f} flag`}
        className={stylesClassName.img}
      />
    </li>
  );
}
