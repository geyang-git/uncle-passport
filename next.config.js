/** @type {import('next').NextConfig} */

const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
});

module.exports = semi({
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{
      source: "/",
      destination: "/utils/explore",
      permanent: true
    }];
  }
});
