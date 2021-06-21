export interface ThrottledFunction<T extends (...args: any) => any> {
  /**
   * Call the original function, but applying the throttle rules.
   *
   * If the throttled function can be run immediately, this calls it and returns its return
   * value, otherwise, it returns the return value of the last invocation.
   */
  (...args: Parameters<T>): ReturnType<T>;
}
