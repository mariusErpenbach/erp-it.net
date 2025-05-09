/** @type {import("puppeteer").Configuration} */
module.exports = {
  chrome: { skipDownload: false }, // Ensure Chrome is downloaded
  cacheDirectory: '/path/to/custom/cache', // Optional: Set a custom cache directory
};