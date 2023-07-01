import { Link } from 'react-router-dom';
import cartIcon from '../../assets/img/cart/cart-icon.svg';
import pizzatest from '../../assets/img/cart/pizzatest.png';

import styles from './CartPage.module.scss';

const Cart = () => {
  console.log('CART RENDER');

  return (
    <div className={styles.cart}>
      <div className={styles.cart_top}>
        <div>
          <img src={cartIcon} alt="cart-icon" />
          <h1>Корзина</h1>
        </div>

        <div>
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

      <div className={styles.pizza}>
        <div>
          <div className={styles.pizza_info}>
            <img src={pizzatest} alt="pizza" />
            <div className={styles.pizza_info_descr}>
              <h2>Сырный цыпленок</h2>
              <p>тонкое тесто, 26 см.</p>
            </div>
          </div>
          {/* Less More */}
          <div className={styles.pizza_added}>
            {/* LESS */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="Group 35">
                <circle
                  id="Ellipse 1"
                  cx="16"
                  cy="16"
                  r="15"
                  fill="white"
                  stroke="#FE5F1E"
                  stroke-width="2"
                />
                <path
                  id="Vector"
                  d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                  fill="#FE5F1E"
                />
              </g>
            </svg>
            <span>2</span>
            {/* MORE */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="Group 36">
                <circle
                  id="Ellipse 1"
                  cx="16"
                  cy="16"
                  r="15"
                  fill="white"
                  stroke="#FE5F1E"
                  stroke-width="2"
                />
                <path
                  id="Vector"
                  d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                  fill="#EB5A1E"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.pizza_price}>
          {/* delete */}
          <h2>
            233 <b>&#8381;</b>
          </h2>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Group 36">
              <circle
                id="Ellipse 1"
                cx="16"
                cy="16"
                r="15"
                fill="white"
                stroke="#D7D7D7"
                stroke-width="2"
              />
              <path
                id="Vector"
                d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3697 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3697 19.7479 17.9557Z"
                fill="#D0D0D0"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className={styles.buying}>
        <div>
          <p>
            Всего пицц:
            <b>
              <strong>20</strong>шт.
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

              <span>Вернуться назад</span>
            </button>
          </Link>
        </div>

        <div className={styles.buying_btn_buy}>
          <p>
            Сумма заказа:
            <b>
              <strong>3534</strong>р.
            </b>
          </p>
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
