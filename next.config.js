/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src *; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; img-src *; style-src * 'unsafe-inline';"
          }
        ]
      }
    ]
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com']
  }
}

module.exports = nextConfig
