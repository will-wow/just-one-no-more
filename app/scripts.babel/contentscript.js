(function() {
  'use strict';

  const randomSelectors = {
    'smbc-comics.com': '.navaux',
    'cad-comic.com': '.random-post-link',
    'penny-arcade.com': '.btnRand',
    'xkcd.com': '[href="//c.xkcd.com/random/comic/"]',
    'm.xkcd.com': '#rnd_btn_b'
  };

  const disabledClass = 'jonm-disabled';

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

  function addDisabledClass(element) {
    element.classList.add(disabledClass);
  }

  function removeDisabledClass(element) {
    element.classList.remove(disabledClass);
  }

  function disableLink(element) {
    console.log('disabling random link', element);

    element.setAttribute('href', '#');
    element.style.pointerEvents = 'none';

    addDisabledClass();
  }

  function disableButton(element) {
    console.log('disabling random button', element);

    element.setAttribute('disabled', 'disabled');

    addDisabledClass();
  }

  function disableElement(element) {
    if (isLink(element)) {
      disableLink(element);
    } else if (isButton(element)) {
      disableButton(element);
    }
  }

  function enableElement(element) {
    removeDisabledClass(element);
  }

  function disableRandom() {
    document.querySelectorAll(getSelector()).forEach(disableElement);
  }

  function reenableRandom() {
    document.querySelectorAll(disabledClass).forEach(enableElement);
  }

  // Start by always turning off the random buttons.
  reenableRandom();
  disableRandom();

  // Check with the background to get the button status.

  // const element = document.querySelector('foo');
})();
