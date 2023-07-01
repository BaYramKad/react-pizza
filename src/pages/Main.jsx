import React from 'react';

import Categories from '../components/Categories';
import SortPizza from '../components/SortPizza';
import CardPizza from '../components/CardPizza';
import CardPizzaSceleton from '../components/CardPizza/CardPizzaSceleton';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../toolkit/filterSlice';
import { setPage } from '../toolkit/paginationSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { idC, isOrder, currentSType } = useSelector((state) => state.filter);
  const currentPage = useSelector((state) => state.pagination.page);

  const getCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // State id для фильтрации пицц
  // State id для сортировки пицц
  // const [sortTypeObj, setSortType] = React.useState({
  //   sortTitle: 'популярности',
  //   sortType: 'rating',
  //   order: false,
  // });

  React.useEffect(() => {
    // const filterCategory = categoryId !== 0 ? `category=${categoryId}` : '';
    const sortPizza = `sortBy=${currentSType}`;
    const order = `${currentSType && '&'}order=${isOrder ? 'asc' : 'desc'}`;

    let url = new URL('https://649b279bbf7c145d023a142d.mockapi.io/items');
    setIsLoading(true);

    fetch(`${url}?${sortPizza}${order}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [currentSType]);

  React.useEffect(() => {
    let url = new URL('https://649b279bbf7c145d023a142d.mockapi.io/items');
    setIsLoading(true);

    fetch(`${url}?&page=${currentPage}&limit=5`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [currentPage]);

  const sceleton = [...new Array(4)].map((_, i) => <CardPizzaSceleton key={i} />);
  const pizzas = items.map((obj) => <CardPizza key={obj.title} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories filterCategory={(id) => getCategoryId(id)} />
        <SortPizza />
      </div>
      <h2 className="content__title">Все пиццы</h2>
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
