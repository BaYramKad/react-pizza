import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import SortPizza from '../components/SortPizza';
import CardPizza, { CardPizzaType } from '../components/CardPizza';
import CardPizzaSceleton from '../components/CardPizza/CardPizzaSceleton';
import ErrorPage from './ErrorPage';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import qs from 'qs';

import { paginationSelector, setPage } from '../toolkit/paginationSlice';
import {
  AsyncLoadType,
  asyncLoadPizza,
  pizzaLoadSelector,
} from '../toolkit/asyncLoadPizza/asyncPizzaSlice';
import { filterSelector, setParseObjUrl } from '../toolkit/filterSlice';
import { searchSelector } from '../toolkit/asyncSearchSlice/asyncSearch';
import { useAppDispatch } from '../toolkit/store';

interface SortObj {
  category: string;
  order: string;
  sortBy: string;
}

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { idC, categories, isOrder, sortType, sortPizza } = useSelector(filterSelector);
  const { pizza, loading, error } = useSelector(pizzaLoadSelector);
  const { searchPizza } = useSelector(searchSelector);
  const currentPage = useSelector(paginationSelector);
  const title = categories[idC];
  const isFetching = React.useRef(false);
  const isMounted = React.useRef(false);
  debugger;
  const fetchPizza = () => {
    const order = isOrder ? 'asc' : 'desc';
    const category = idC < 1 ? -1 : idC;
    const search: AsyncLoadType = { category, sortType, order, currentPage };

    dispatch(asyncLoadPizza(search));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const urlBrowser = window.location.search.slice(1);
      const urlParse = qs.parse(urlBrowser);
      const currentSortObj = sortPizza.find((item: any) => item.sortType === urlParse.sortBy);
      if (typeof urlParse === 'object' || typeof urlParse === 'string') {
        if (urlParse.category && urlParse) {
          dispatch(
            setParseObjUrl({
              idC: +urlParse.category,
              isOrder: urlParse.order,
              sortType: urlParse.sortBy,
            }),
          );

          isFetching.current = true;
        }
      }
    }
  }, []);
  React.useEffect(() => {
    if (!isFetching.current) {
      fetchPizza();
    }
    isFetching.current = false;
  }, [idC, sortType, isOrder, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const searchObj = {
        category: idC.toString(),
        sortBy: sortType.toString(),
        order: isOrder,
      };

      const result = qs.stringify(searchObj);
      navigate('?' + result);
    }

    isMounted.current = true;
  }, [idC, isOrder, sortType, currentPage]);

  const sceleton = [...new Array(4)].map((_, i) => <CardPizzaSceleton key={i} />);
  const arrayPizza = (searchPizza.length > 0 ? searchPizza : pizza).map((obj: CardPizzaType) => (
    <CardPizza {...obj} />
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
