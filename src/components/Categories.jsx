import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../toolkit/filterSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, idC } = useSelector((state) => state.filter);

  const setId = (index) => {
    dispatch(setCategoryId(index));
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li className={idC === index ? 'active' : ''} key={index} onClick={() => setId(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
