import { makeSelectPathname } from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(makeSelectPathname()(mockedState)).toEqual('/foo');
  });
});
