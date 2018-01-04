export const fakeAction = () => ({type: 'FAKE'});

export const makeHouseData = (houses) => ({
  type: 'GET_HOUSE_DATA',
  houses
});