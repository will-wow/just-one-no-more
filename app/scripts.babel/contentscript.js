function main() {
  'use strict';

  const randomSelectors = {
    'smbc-comics.com': '.navaux',
    'cad-comic.com': '.random-post-link',
    'penny-arcade.com': '.btnRand',
    'xkcd.com': '[href="//c.xkcd.com/random/comic/"]',
    'm.xkcd.com': '#rnd_btn_b'
  };

  function getSelector() {
    const apex = window.location.host.replace(/^www\./, '');
    return randomSelectors[apex];
  }

  function isButton(element) {
    return element.nodeName === 'BUTTON';
  }

  function isLink(element) {
    return element.nodeName === 'A';
  }

  function disableLink(element) {
    console.log('disabling random link', element);

    element.setAttribute('href', '#');
    element.style.pointerEvents = 'none';
  }

  function disableButton(element) {
    console.log('disabling random button', element);

    element.setAttribute('disabled', 'disabled');
  }

  function disableElement(element) {
    if (isLink(element)) {
      disableLink(element);
    } else if (isButton(element)) {
      disableButton(element);
    }
  }

  document.querySelectorAll(getSelector()).forEach(disableElement);
}

main();
