export const get = (obj, path) => {
  if (typeof path !== 'string') throw new TypeError('get: second argument must be of type string"');
  if (typeof obj !== 'object' || Array.isArray(obj)) throw new TypeError('get: first argument must be of type: object');

  const pathParts = path.split('.').reverse();
  if (pathParts.length === 0) return obj;

  let value = { ...obj };
  while (pathParts.length > 0) {
    const prop = pathParts.pop();
    if (!value[prop]) return undefined;

    value = value[prop];
  }

  return value;
};

