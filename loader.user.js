
// ==UserScript==
// @name         Rabotyaga
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  goroxels.ru (пиксели покруче)
// @author       Gorox
// @match        https://pixel.xn--d1ah4a.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xn--d1ah4a.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @connect      raw.githack.com
// @connect      *.trycloudflare.com
// @updateURL    https://raw.githack.com/pixelGRX/itdStuff/main/loader.meta.js
// @downloadURL  https://raw.githack.com/pixelGRX/itdStuff/main/loader.user.js
// @run-at       document-start
// ==/UserScript==

(function () {
  const URL = 'https://raw.githack.com/pixelGRX/itdStuff/main/worker.min.js?v=' + Date.now();

  GM_xmlhttpRequest({
    method: 'GET',
    url: URL,
    onload: function (res) {
      try {
        const code = res.responseText;
        const { init } = new Function(code)();
        init({
            getLS: GM_getValue,
            setLS: GM_setValue,
            xhr: GM_xmlhttpRequest
        });
      } catch (e) {
        console.error('Loader error:', e);
      }
    }
  });
})();
