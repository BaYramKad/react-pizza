import React from 'react';

import Categories from '../components/Categories';
import SortPizza from '../components/SortPizza';
import CardPizza from '../components/CardPizza';
import CardPizzaSceleton from '../components/CardPizza/CardPizzaSceleton';
import ErrorPage from './ErrorPage';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { setPage } from '../toolkit/paginationSlice';
import { asyncLoadPizza } from '../toolkit/asyncLoadPizza/pizzaSlice';
import { setParseObjUrl } from '../toolkit/filterSlice';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idC, categories, isOrder, currentSObj, sortPizza } = useSelector((state) => state.filter);
  const { pizza, loading, error } = useSelector((state) => state.pizzaLoad);
  const { searchPizza } = useSelector((state) => state.search);
  const currentPage = useSelector((state) => state.pagination.page);
  const title = categories[idC];
  const isFetching = React.useRef(false);
  const isMounted = React.useRef(false);

  const fetchPizza = () => {
    const { sortType } = currentSObj;
    const order = isOrder ? 'asc' : 'desc';
    const category = idC < 1 ? '' : `&category=${idC}`;
    const search = { category, sortType, order, currentPage };
    dispatch(asyncLoadPizza(search));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const urlBrowser = window.location.search.slice(1);
      const urlParse = qs.parse(urlBrowser);
      const currentSortObj = sortPizza.find((item) => item.sortType === urlParse.sortBy);

      dispatch(
        setParseObjUrl({
          ...urlParse,
          sortBy: { ...currentSortObj },
        }),
      );
      isFetching.current = true;
    }
  }, []);
  React.useEffect(() => {
    if (!isFetching.current) {
      fetchPizza();
    }
    isFetching.current = false;
  }, [idC, currentSObj, isOrder, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const searchObj = {
        category: idC.toString(),
        sortBy: currentSObj.sortType.toString(),
        order: isOrder,
      };

      const result = qs.stringify(searchObj);
      navigate('?' + result);
    }

    isMounted.current = true;
  }, [idC, isOrder, currentSObj.sortType, currentPage]);

  const sceleton = [...new Array(4)].map((_, i) => <CardPizzaSceleton key={i} />);
  const arrayPizza = (searchPizza.length > 0 ? searchPizza : pizza).map((obj) => (
    <CardPizza key={obj.title} {...obj} />
  ));

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="content__top">
        <Categories />
        <SortPizza />
      </div>
      <h2 className="content__title">{title && `${title} Пиццы`}</h2>
      <div className="content__items">{loading ? sceleton : arrayPizza}</div>

      <Stack spacing={2}>
        <Pagination
          page={currentPage}
          onChange={(_, pageNum) => dispatch(setPage(pageNum))}
          sx={() => {
            return {
              margin: 'auto',
              marginTop: '50px',
            };
          }}
          count={2}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default Main;
