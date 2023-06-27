import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SortPizza from './components/SortPizza';
import CardPizza from './components/CardPizza';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://649b279bbf7c145d023a142d.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <SortPizza />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => {
              return <CardPizza key={obj.title} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
