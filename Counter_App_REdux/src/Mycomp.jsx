import { useSelector } from "react-redux";

const Mycomp = () => {
  const count = useSelector((state) => state.counter);

  return (
    <>
      <h1>The Update Count Is {count}</h1>
    </>
  );
};

export default Mycomp;
