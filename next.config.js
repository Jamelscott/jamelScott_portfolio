/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images:{
    domains: ["placekitten.com"]
  },
}

module.exports = nextConfig
