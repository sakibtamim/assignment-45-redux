import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./components/counterSlice";
import Header from "./components/Header";

function App() {
  let data = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  let countUp = () => {
    dispatch(increment(10));
  };

  let countDown = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <div>{data}</div>
      <button onClick={countDown}>-</button>

      <Header />
    </>
  );
}

export default App;
