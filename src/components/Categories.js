import React from "react";

const Categories = ({ filterItems, categories }) => {
  const renderButtons = categories.map((category) => {
    return (
      <button
        className="filter-btn"
        onClick={() => filterItems(category)}
        key={category}
      >
        {category}
      </button>
    );
  });
  return <div className="btn container">{renderButtons}</div>;
};

export default Categories;
