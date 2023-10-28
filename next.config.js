/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PWDR: process.env.PASSWORD,
      },
}

module.exports = nextConfig

