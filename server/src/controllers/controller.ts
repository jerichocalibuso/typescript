export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandle = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
    }
  };
}
