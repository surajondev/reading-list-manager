/** @type {import('next').NextConfig} */
require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly','/'],
  },
  env:{
    BACKEND : process.env.BACKEND
  }
}

module.exports = nextConfig
