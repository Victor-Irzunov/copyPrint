const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['copyprintservice.by'],
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map'
    }
    return config
  },

}
module.exports = nextConfig;
