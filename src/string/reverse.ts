function reverse_string(str: string): string {
  let res: string = "";
  for(let i: number = str.length - 1; i >= 0; i--) {
    res += str[i]; 
  }

  return res;
}

