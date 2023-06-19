/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/a-propos',
        destination: '/about',
        permanent: true,
      }

    ]

  }
}

module.exports = nextConfig
