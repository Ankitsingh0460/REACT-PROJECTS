import ErrorMsg from "./component/ErrorMsg";
import FoodItem from "./component/FoodItem";
import Heading from "./component/Heading";
import InputBox from "./component/InputBox";
import "./App.css";
import { useState } from "react";

function App() {
  let [array, setFoodItem] = useState(["sabji", "chai", "dal"]);

  const onkeyValue = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...array, newFoodItem];
      setFoodItem(newItem);

    }

  };

  return (
    <div className="mainClass">
      <Heading></Heading>
      <InputBox onkeyButton={onkeyValue}></InputBox>
      <ErrorMsg arrays={array}></ErrorMsg>
      <FoodItem arrays={array}></FoodItem>
    </div>
  );
}

export default App;
