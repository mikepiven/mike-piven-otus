export const sum = (x) => {
  let total = x;
  const func = (y) => {
    if (typeof y !== "undefined") {
      total = total + y;
      return func;
    } else {
      return total;
    }
  };
  return func;
};