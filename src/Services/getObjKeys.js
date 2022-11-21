function ObjKeysList(obj) {
  let keysArr = [];
  for (const key in obj) {
    keysArr.push(obj[key]);
  }
  return keysArr;
}

export default ObjKeysList;
