import React from 'react';

import Categories from '../components/Categories';
import SortPizza from '../components/SortPizza';
import CardPizza from '../components/CardPizza';
import CardPizzaSceleton from '../components/CardPizza/CardPizzaSceleton';

const Main = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://649b279bbf7c145d023a142d.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <SortPizza />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <CardPizzaSceleton key={i} />)
          : items.map((obj) => {
              return <CardPizza key={obj.title} {...obj} />;
            })}
      </div>
    </>
  );
};

export default Main;
