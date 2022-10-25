import React, { useState } from "react";
import "./Resturant.css";
import Menu_Api from "../ResturantApp/Menu_Api";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const ArrayData = [...new Set(Menu_Api.map(uni => uni.category)), "all"];
console.log(ArrayData);

const Resturant = () => {
  const [MenuData, setMenuData] = useState(Menu_Api);
  const [unique, setUnique] = useState(ArrayData);
  const FilterItem = names => {
    if (names === "all") {
      setMenuData(Menu_Api);
      return;
    }
    const newData = Menu_Api.filter(val => {
      return val.category === names;
    });
    setMenuData(newData);
  };
  return (
    <>
      <NavBar FilterItem={FilterItem} uniqueData={unique} />
      <MenuCard MenuData={MenuData} />
    </>
  );
};

export default Resturant;
