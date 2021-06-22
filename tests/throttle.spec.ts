import { throttle } from '../src';

describe('throttle() ', () => {
  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('throttles a function', () => {
    const callMethod = jasmine.createSpy();
    const throttled = throttle(() => callMethod(), 100);

    const t = setInterval(() => throttled(), 50);

    jasmine.clock().tick(400);

    expect(callMethod).toHaveBeenCalledTimes(4);

    clearInterval(t);
  });

  it('throttled function returns last value of returned function (single run)', () => {
    const throttled = throttle((value: number) => value + 1, 400);

    let i = 0;

    const t = setInterval(() => (i = throttled(i)), 100);

    jasmine.clock().tick(400);

    expect(i).toEqual(1);
    clearInterval(t);
  });

  it('throttled function returns last value of returned function (multiple runs)', () => {
    const throttled = throttle((value: number) => value + 1, 200);

    let i = 0;

    const t = setInterval(() => (i = throttled(i)), 100);

    jasmine.clock().tick(300);

    expect(i).toEqual(2);
    clearInterval(t);
  });
});
