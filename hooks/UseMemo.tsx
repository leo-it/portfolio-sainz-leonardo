import { useMemo } from "react";

const values = [3, 9, 6, 4, 2, 1];

// This will always return the same value, a sorted array. Once the values array changes then this will recompute.
export const memoizedValue = useMemo(() => values.sort(), [values]);
