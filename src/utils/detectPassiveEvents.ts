export const detectPassiveEvents = () => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = true;
      },
    });
    // @ts-ignore
    window.addEventListener("testPassive", null, opts);
    // @ts-ignore
    window.removeEventListener("testPassive", null, opts);
    // tslint:disable-next-line:no-empty
  } catch (e) {}
  return supportsPassive;
};
