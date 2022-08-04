/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MORALIS_SERVER_URL:process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    NEXT_PUBLIC_MORALIS_APP_ID:process.env.NEXT_PUBLIC_MORALIS_APP_ID

  }
}

module.exports = nextConfig
