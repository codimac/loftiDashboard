import Http from '@Shared/Http';
import MockAdapter from 'axios-mock-adapter';

const HttpMock = new MockAdapter(Http);

export default HttpMock;
