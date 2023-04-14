import { useCallback } from "react";

const values = [3, 9, 6, 4, 2, 1];


// This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.
export const UseCallback = useCallback(() => values.sort(), [values]);
