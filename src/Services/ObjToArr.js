function ObjToArr(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

export default ObjToArr;
