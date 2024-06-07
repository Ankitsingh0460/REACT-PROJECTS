import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./Redux/slices/counter";
import Mycomp from "./Mycomp";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <>
      <div>
        <h1>Counter {count}</h1>
        <button onClick={() => dispatch(increment())}>Incriment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <hr />
        <Mycomp />
      </div>
    </>
  );
}

export default App;
