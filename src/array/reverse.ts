function reverse<T>(array: T[]): T[] {
  let res: T[] = [];
  
  for(let i: number = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  } 

  return res;
}
