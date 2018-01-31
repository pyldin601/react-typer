exports.pack = function (list) {
  const first = list[0];
  const rest = list.slice(1);

  const result = [];
  let acc = first;

  for (let i = 0; i < rest.length; i += 1) {
    const delta = rest[i] - acc;
    acc = rest[i];
    result.push(delta);
  }
  return result;
}
