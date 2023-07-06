import { useSelector } from 'react-redux';
import styles from './Error.module.scss';

const Error = () => {
  const { messageError } = useSelector((state) => state.pizzaLoad);

  return (
    <div className={styles.error}>
      <span>&#128564;</span>
      <h1>Ошибка:</h1>
      <i>{messageError.message}</i>
      <p>Страница не найдена или ошибка сервера</p>
    </div>
  );
};

export default Error;
