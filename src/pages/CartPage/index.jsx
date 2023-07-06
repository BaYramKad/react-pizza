import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import cartIcon from '../../assets/img/cart/cart-icon.svg';

import styles from './CartPage.module.scss';

import EmptyCart from './EmptyCart';
import CartPizza from '../../components/CartPizza';
import { clearCart } from '../../toolkit/pizzaSlice';

const Cart = () => {
  const { items, countPizza, totalAmount } = useSelector((state) => state.pizzaCart);
  const dispatch = useDispatch();

  const onClearCart = () => {
    dispatch(clearCart());
  };

  if (!totalAmount) {
    return <EmptyCart />;
  }
  return (
    <main className={styles.cart}>
      <div className={styles.cart_top}>
        <div>
          <img src={cartIcon} alt="cart-icon" />
          <h1>Корзина</h1>
        </div>

        <div onClick={onClearCart}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="iconfinder_trash-2_3324927 1">
              <path
                id="Vector"
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className={styles.cart_scroll}>
        {items.map((item) => (
          <CartPizza key={item.id} {...item} />
        ))}
      </div>

      <div className={styles.buying}>
        <div>
          <p>
            Всего пицц:
            <b>
              <strong>{countPizza}</strong>шт.
            </b>
          </p>
          <Link to={'/'}>
            <button className={styles.buying_btn_back}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  id="&#60;Path&#62;"
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Link to="/">Вернуться назад</Link>
            </button>
          </Link>
        </div>

        <div className={styles.buying_btn_buy}>
          <p>
            Сумма заказа:
            <b>
              <strong>{totalAmount}</strong>р.
            </b>
          </p>
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
