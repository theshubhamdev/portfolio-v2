/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  env: {
    OPENAI: process.env.OPENAI
  }
}

module.exports = nextConfig
