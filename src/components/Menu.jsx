import React from "react";

const Menu = ({
  selectedCategory,
  handleCategoryChange,
  displayedProducts,
}) => (
  <div className="menu">
    <h2>Select category:</h2>
    <select
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Fruit">Fruit</option>
      <option value="Vegetable">Vegetable</option>
      <option value="Bakery">Bakery</option>
      <option value="Dairy">Dairy</option>
    </select>
    <p>Displayed Products: {displayedProducts}</p>
  </div>
);

export default Menu;
