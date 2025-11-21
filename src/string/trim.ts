function trim(str: string): string {
  let res: string = "";
  let in_space: number = 0;

  for(let i: number = 0; i < str.length; i++) {
    if(in_space == 0 && str[i] == ' ') {
      in_space = 1;
      res += ' ';
    }
    else if(in_space > 0 && str[i] == ' ') {
      continue;
    }
    else if(in_space > 0 && str[i] != ' ') {
      in_space = 0;
      res += str[i];
    }
    else {
      res += str[i];
    } 
  }

  return res;
}
