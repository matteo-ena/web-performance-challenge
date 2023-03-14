const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"

const acceptCookies = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('.cookieLayer__base--hidden');
};

const cookieLayerButton = document.querySelector('.cookieLayer__button');

cookieLayerButton.addEventListener('click', acceptCookies());

const dynamicContent = () => {
  const marqueeBar = document.querySelector('marquee');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);
};

dynamicContent();