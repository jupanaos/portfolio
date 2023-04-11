/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images API optimization don't work on shared hosting for deployment
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig
