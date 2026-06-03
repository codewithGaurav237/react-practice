import React, { useState } from "react";

const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "addidas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];

const Filterbrand = () => {
  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    const value = e.target.value;
    const filteredbrand =
      value?.length > 0
        ? brands.filter((brand) =>
            brand.brandName.includes(value.toLowerCase()),
          )
        : allBrands;
    setBrands(filteredbrand);
  };
  return (
    <>
      <input onChange={onSearchChange} placeholder="search for brands" />
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </>
  );
};

export default Filterbrand;
