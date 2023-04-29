const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vdom.brigady.by'],
    unoptimized: true,
  },
};

module.exports = {
  ...nextConfig,
  output: 'standalone',
};
