const _removePortAndProtocol = (url) => {
  const reg = /http(|s):\/\//i;
  return url.replace(reg,'').replace(/:[0-9]{4}/i, '');
};

const _zip = (array, otherArray) => {
  return array.map((el, index) => [el, otherArray[index]]);
};

const _uniq = (array) => {
  return array.filter( (value, index, self) => self.indexOf(value) === index );
};

const _disassemble = (str) => str.split('.').reverse();
const _assemble = (str) => str.reverse().join('.');

const _commonPart = (url, otherUrl) => {
  const [ that, other ] = [url, otherUrl].map(_disassemble);
  return _assemble(_uniq(_zip(that, other).map(([a, b]) => a === b ? a : null)));
};

export default function (urls) {
  const hosts = urls.map((url) => {
    return _removePortAndProtocol(url);
  });
  if (hosts.length < 2) {
   return hosts;
  }
  const domain = hosts.slice(1).reduce((el, acc) => {
    return _commonPart(acc, el);
  }, hosts[0]);
  if (domain.length === 0) {
   return hosts;
  }
  return [domain];
}
