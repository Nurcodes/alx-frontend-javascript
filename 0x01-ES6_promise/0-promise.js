function getResponseFromAPI() {
  const result = true;

  return new Promise((res, rej) => {
    if (result) res();
    else {
      rej();
    }
  });
}
export default getResponseFromAPI;
