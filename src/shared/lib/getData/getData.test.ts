import axios, { AxiosResponse } from 'axios';

import { getData } from './getData';
import { getDataMock } from './getData.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Функция - validateValue', () => {
  let response: Pick<AxiosResponse, 'data'>;

  beforeEach(() => {
    response = {
      data: getDataMock,
    };
  });

  test('Корректное значение', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve(response));
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual([1, 2]);
  });
});
