const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"

// advertisment mock
const initAd = () => {
  const adSpace = document.querySelector('.main__advertising');
  const gif = '<div style="width:400px;max-width:100%;"><div style="height:0;padding-bottom:52.4%;position:relative;"><iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z"></iframe></div></div>';
  setTimeout(() => adSpace.innerHTML = gif, 3000);
};

const acceptCookies = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--accepted');
  initAd();
};

const dynamicContent = () => {
  const marqueeBar = document.querySelector('marquee');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);
};

dynamicContent();

const cookieLayerButton = document.querySelector('.cookieLayer__button');
cookieLayerButton.addEventListener('click', () => acceptCookies());

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

document.addEventListener('load', () => {
  document.querySelector('.placeholder-slide').classList.add('hidden');
  document.querySelector('.hero__carousel').classList.remove('hidden');
})