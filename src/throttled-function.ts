export interface ThrottledFunction<T extends (...args: any) => any> {
  /**
   * Call the original function, but applying the throttle rules.
   *
   * If the throttled function can be run immediately, this calls it and returns its return
   * value.
   *
   * Otherwise, it returns the return value of the last invocation, or undefined if the throttled
   * function was not invoked yet.
   */
  (...args: Parameters<T>): ReturnType<T>;
}
