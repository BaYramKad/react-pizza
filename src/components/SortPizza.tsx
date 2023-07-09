import React from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useSelector } from 'react-redux';
import { changeOrder, changeSortType, filterSelector } from '../toolkit/filterSlice';
import { useAppDispatch } from '../toolkit/store';

const SortPizza: React.FC = () => {
  const [isActivePopPup, setActivePopPup] = React.useState(false);

  const { sortPizza, isOrder, sortType } = useSelector(filterSelector);

  const dispatch = useAppDispatch();

  const setActiveHandler = (obj: object) => {
    dispatch(changeOrder());
    // dispatch(changeSortType(''));
    setActivePopPup((prev) => !prev);
  };
  let domNode = useClickOutside(() => {
    setActivePopPup(false);
  });

  return (
    <div onClick={() => setActivePopPup((prev) => !prev)} className="sort">
      <div ref={domNode}>
        <div className={`sort__label ${isActivePopPup ? 'active' : ''}`}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span>{sortType}</span>
        </div>
        {isActivePopPup && (
          <div className="sort__popup" onClick={() => setActivePopPup((prev) => !prev)}>
            <ul>
              {sortPizza.map((obj: any, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveHandler(obj);
                    }}
                    className={obj.sortType === sortType ? 'active' : ''}>
                    {obj.sortTitle}
                    {obj.sortType === sortType && isOrder ? (
                      <svg id="Outline" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPizza;
