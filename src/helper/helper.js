  export const getData = async() => {
  const houseFetch = await fetch ('http://localhost:3001/api/v1/houses');
  const houseData = await houseFetch.json();
  return houseData
}
