import React from 'react';
import { useSelector } from 'react-redux';

const Categories = ({ filterCategory }) => {
  const { categories, idC } = useSelector((state) => state.filter);
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              className={idC === index ? 'active' : ''}
              key={index}
              onClick={() => filterCategory(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
