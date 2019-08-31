// Модуль экранный помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'ScreenHelper';

  const XS = 360;
  const SM = 768;
  const MD = 922;
  const LG = 1200;

  function isMin() {
    return window.matchMedia(`(max-width: ${XS}px)`).matches;
  }

  function isXS() {
    return window.matchMedia(`(max-width: ${SM - 1}px)`).matches;
  }

  function isSM() {
    return window.matchMedia(`(min-width: ${SM}px) and (max-width: ${MD - 1}px)`).matches;
  }

  function isMD() {
    return window.matchMedia(`(min-width: ${MD}px) and (max-width: ${LG - 1}px)`).matches;
  }

  function isLG() {
    return window.matchMedia(`(min-width: ${LG}px)`).matches;
  }

  return {
    SM,
    isMin,
    isXS,
    isSM,
    isMD,
    isLG,
  };
})();

export default ScreenHelper;
