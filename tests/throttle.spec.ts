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

		const t = setInterval(() => {
			throttled();
		}, 50);

		jasmine.clock().tick(400);

		expect(callMethod).toHaveBeenCalledTimes(4);

		clearInterval(t);
	});
});
