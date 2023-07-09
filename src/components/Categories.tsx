import React from 'react';
import { useSelector } from 'react-redux';
import { filterSelector, setCategoryId } from '../toolkit/filterSlice';
import { useAppDispatch } from '../toolkit/store';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, idC } = useSelector(filterSelector);

  const setId = (index: number) => {
    dispatch(setCategoryId(index));
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item: any, index: number) => {
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
