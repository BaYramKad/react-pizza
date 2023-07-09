import React from 'react';
import { useSelector } from 'react-redux';
import { setItemsCart, takeInfoSelector } from '../../toolkit/pizzaSlice';
import { useAppDispatch } from '../../toolkit/store';

export interface CardPizzaType {
  id?: number;
  key?: number;
  imageUrl?: string;
  title?: string;
  sizes?: number[];
  price?: number;
}

const CardPizza: React.FC<CardPizzaType> = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useAppDispatch();
  const { type } = useSelector(takeInfoSelector);
  const [isActiveType, setActiveType] = React.useState(0);
  const [isActiveSize, setActiveSize] = React.useState(0);
  let [countSelected, setCount] = React.useState(0);

  const onClickPizzaToCart = () => {
    setCount((prev) => prev + 1);
    const cartPizza = {
      imageUrl,
      title,
      price,
      id,
      count: countSelected,
      type: isActiveType,
      size: isActiveSize,
    };

    dispatch(setItemsCart(cartPizza));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {type.map((type: string, i: number) => {
            return (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={isActiveType === i ? 'active' : ''}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size: number, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => setActiveSize(i)}
                  className={isActiveSize === i ? 'active' : ''}>
                  {size} см.
                </li>
              );
            })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={() => onClickPizzaToCart()} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countSelected > 0 && <i>{countSelected}</i>}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
