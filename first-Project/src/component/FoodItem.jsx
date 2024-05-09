import List from "./List";
import styles from "./FoodItem.module.css"
import { useState } from "react";

const FoodItem = ({ arrays }) => {
  let [activeItem, setButtonMethod] = useState([]);

  let buyButtons = (list, event) => {
    let newItem = [...activeItem, list];
    setButtonMethod(newItem);
  }
  return <ul key={"mainul"} className={`${styles["foodInput"]} list-group`}>
    {arrays.map((list) =>
      <List key={list} listItem={list} bought={activeItem.includes(list)} handleBuyButton={(event) => buyButtons(list, event)} ></List>)}
  </ul>
}

export default FoodItem;