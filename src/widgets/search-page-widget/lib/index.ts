export const searchByString = (
  string: string,
  data: { [key: string]: string },
) => {
  const result: string[] = [];
  Object.keys(data).forEach((key) => {
    if (data[key].toLowerCase().includes(string.toLowerCase())) {
      result.push(key);
    }
  });
  return result;
};
