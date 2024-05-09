import styles from "./List.module.css";


const List = ({ listItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["kg-span"]}>{listItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default List;
