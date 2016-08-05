// asd.dfg.honeypot.io

const uniqueElements = (arr) => {
  return arr.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
};

const doStuff = (elem1, elem2) => {
  // elem1: [io, honeypot, www]
  const aggregate = [];
  elem1.forEach((elem) => {
    const index = elem1.indexOf(elem);
    if (elem1 === elem2[index]) {
      aggregate.push(elem1);
    } else {
      return;
    }
  });
  return aggregate;
};

export default (strings) => {
  const stringList = Array.isArray(strings) ? strings : [strings];
  return stringList.map((string) => {
    const tokenList = string.replace(/https?\:\/\//, '').split('.').reverse();
  }).reduce((elem1, elem2) => {
    doStuff(elem1, elem2)
  }, []);
};
