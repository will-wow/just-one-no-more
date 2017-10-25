'use strict';

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  if (type !== 'foo') return;

  sendResponse(null);
});
