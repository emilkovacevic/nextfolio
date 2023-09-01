/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com']
  }
}

module.exports = nextConfig
