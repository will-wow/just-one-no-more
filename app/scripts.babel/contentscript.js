(function() {
  'use strict';

  const randomSelectors = {
    'amultiverse.com': '.navi-random',
    'cad-comic.com': '.random-post-link',
    'm.xkcd.com': '#rnd_btn_b',
    'penny-arcade.com': '.btnRand',
    'questionablecontent.net': '#comicnav li:nth-child(5) a',
    'qwantz.com': '.randomquote > a',
    'smbc-comics.com': '.cc-navaux',
    'xkcd.com': '[href="//c.xkcd.com/random/comic/"]'
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

    addDisabledClass(element);
  }

  function disableButton(element) {
    console.log('disabling random button', element);

    element.setAttribute('disabled', 'disabled');

    addDisabledClass(element);
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

  function onMessage(message) {
    if (!message) return;

    const { shouldDisableRandom } = message;

    if (shouldDisableRandom) {
      disableRandom();
    } else {
      reenableRandom();
    }
  }

  // Start by always turning off the random buttons.
  disableRandom();

  // Check with the background to get the button status.
  chrome.runtime.sendMessage({ type: 'get-status' }, onMessage);
  // React to any messages from icon clicks.
  chrome.runtime.onMessage.addListener(onMessage);
})();
