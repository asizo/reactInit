/**
 * document 객체를 다룰 export 들을 관리한다.
 */
const setWindowInnerWidth = () => {
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', vw + 'px');
}

export {setWindowInnerWidth}
