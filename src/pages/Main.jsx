import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import SortPizza from '../components/SortPizza';
import CardPizza from '../components/CardPizza';
import CardPizzaSceleton from '../components/CardPizza/CardPizzaSceleton';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../toolkit/paginationSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { idC, categories, isOrder, currentSObj } = useSelector((state) => state.filter);
  const currentPage = useSelector((state) => state.pagination.page);
  const title = categories[idC];

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const url = 'https://649b279bbf7c145d023a142d.mockapi.io/items?limit=5';

  React.useEffect(() => {
    const filterCategory = idC > 0 ? `&category=${idC}` : '';
    const sortPizza = `&sortBy=${currentSObj.sortType}`;
    const order = `${currentSObj && '&'}order=${isOrder ? 'asc' : 'desc'}`;

    setIsLoading(true);
    axios.get(`${url}${sortPizza}${filterCategory}${order}`).then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, [currentSObj, isOrder, idC]);

  React.useEffect(() => {
    setIsLoading(true);
    axios.get(`${url}&page=${currentPage}`).then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, [currentPage]);

  const sceleton = [...new Array(4)].map((_, i) => <CardPizzaSceleton key={i} />);
  const pizzas = items.map((obj) => <CardPizza key={obj.title} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories />
        <SortPizza />
      </div>
      <h2 className="content__title">{title && `${title} Пиццы`}</h2>
      <div className="content__items">
        {isLoading ? sceleton : pizzas}
        {pizzas.length > 0 ? (
          ''
        ) : (
          <div className="search_empty">
            <h2>По запросу ничего не найдено!</h2>
          </div>
        )}
      </div>
      <Stack spacing={2}>
        <Pagination
          page={currentPage}
          onChange={(_, pageNum) => dispatch(setPage(pageNum))}
          sx={'margin: auto; margin-top: 50px'}
          count={2}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default Main;
