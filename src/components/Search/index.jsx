import React from 'react';

import empty from '../../assets/img/close.svg';

import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSearchPizza } from '../../toolkit/asyncSearchSlice/asyncSearch';

const Search = () => {
  const [value, setValue] = React.useState('');
  const [isQuery, setisQuery] = React.useState(false);
  const refClose = React.useRef();
  const dispatch = useDispatch();
  const searchPizza = useSelector((state) => state.search.searchPizza);
  console.log('searchPizza: ', searchPizza);

  const debounFoo = React.useCallback(
    debounce((str) => {
      dispatch(asyncSearchPizza(str));
      setisQuery((prev) => true);
    }, 250),
    [],
  );

  const searchHandler = (event) => {
    let str = event.target.value.trim();
    setValue(str);
    debounFoo(str);
  };

  const clearValue = () => {
    setValue('');
    refClose.current.focus();
    dispatch(asyncSearchPizza(''));
  };

  return (
    <div className={styles.search}>
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 513.749 513.749"
        width="18"
        height="18">
        <g>
          <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z" />
        </g>
      </svg>
      <input
        data-hello="hello"
        ref={refClose}
        value={value}
        onChange={searchHandler}
        type="text"
        placeholder="Поиск пицц..."
      />
      {value && searchPizza <= 0 && (
        <span className={styles.search_empty_items}>По запросу "{value}" ничего не найдено</span>
      )}

      {value && (
        <img
          onClick={clearValue}
          className={styles.search_empty_img}
          src={empty}
          alt="empty-input"
        />
      )}
    </div>
  );
};

export default Search;
