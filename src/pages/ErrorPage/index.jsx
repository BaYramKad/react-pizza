import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.error}>
      <span>&#128564;</span>
      <h1>Ошибка: </h1>
      <p>Несуществующая страница</p>
    </div>
  );
};

export default Error;