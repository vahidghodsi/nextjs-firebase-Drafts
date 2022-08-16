const cloneObject = (objToClone) => {
  if (typeof objToClone === 'object') {
    let clonnedObj = {};
    if (Array.isArray(objToClone)) {
      clonnedObj = [];
      objToClone.forEach((item, index) => {
        let child = typeof item === 'object' ? cloneObject(item) : item;
        clonnedObj.push(child);
      });
    } else {
      let keys = Object.keys(objToClone);
      Object.values(objToClone).forEach((item, index) => {
        clonnedObj[keys[index]] =
          typeof item === 'object' ? cloneObject(item) : item;
      });
    }
    return clonnedObj;
  }
  return objToClone;
};

export default cloneObject;
