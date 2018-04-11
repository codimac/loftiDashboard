import HttpMock from '@Shared/Http.mocks';

export const userMock = HttpMock.onGet('/users/me').reply(200, {
  id: 1,
  name: 'Sylvie'
});

