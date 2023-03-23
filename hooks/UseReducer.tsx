import Button from '@mui/material/Button';
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
    </>
  );
}
