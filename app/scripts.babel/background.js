'use strict';

let enabled = true;

const enabledIcon = 'images/icon-38.png';
const disabledIcon = 'images/dark-icon-38.png';

function shouldDisableRandomMessage() {
  return { shouldDisableRandom: enabled };
}

function updateIcon() {
  chrome.browserAction.setIcon({
    path: enabled ? enabledIcon : disabledIcon
  });
}

function updateContentScript() {
  chrome.runtime.sendMessage(shouldDisableRandomMessage());
}

function onIconClick() {
  enabled = !enabled;
  console.log('onIconClick', enabled);
  updateIcon();
  updateContentScript();
}

function onContentScriptRequest(request, sender, sendResponse) {
  console.log('got request');
  if (request.type !== 'get-status') return;
  sendResponse(shouldDisableRandomMessage());
}

chrome.browserAction.onClicked.addListener(onIconClick);
chrome.runtime.onMessageExternal.addListener(onContentScriptRequest);
