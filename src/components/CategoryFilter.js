import React from "react";

function CategoryFilter({onCategoryChange, categories, current}) {

  function handleClick(e) {
    onCategoryChange(e.target.textContent);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button onClick={handleClick} key={category} className={category === current ? "selected" : ""}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
