import { Link } from 'react-router-dom';
import emptyCartImg from '../../assets/img/empty-cart.png';
import styles from './CartPage.module.scss';

const EmptyCart = () => {
  return (
    <>
      <section class="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>На главную</span>
        </Link>
      </section>
    </>
  );
};

export default EmptyCart;
