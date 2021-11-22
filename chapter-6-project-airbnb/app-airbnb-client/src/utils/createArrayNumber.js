export const createArrayNumber = (start, end) => {
  const array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
  }
  return array;
};
