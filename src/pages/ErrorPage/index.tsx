import { useSelector } from 'react-redux';
import styles from './Error.module.scss';
import { pizzaLoadSelector } from '../../toolkit/asyncLoadPizza/asyncPizzaSlice';

const Error = () => {
  const answer = useSelector(pizzaLoadSelector);
  console.log('answer: ', answer);

  return (
    <div className={styles.error}>
      <span>&#128564;</span>
      <h1>Ошибка:</h1>
      <i>dfsdf</i>
      <p>Страница не найдена или ошибка сервера</p>
    </div>
  );
};

export default Error;
