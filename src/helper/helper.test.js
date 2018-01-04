import getData from './helper';
import mockApiCall from '../mockData/mockApiCall';

describe('fetch house data', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => 
    Promise.resolve(
      mockApiCall
    )
  })
  );

  it('should be a function', () => {
    expect(getData).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await getData();
    
    expect(typeof fetch).toEqual('array');
  })

})