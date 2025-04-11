/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'LinuxServer.io',
    description: 'Kasm workspaces provided by LSIO expertise',
    icon: 'https://www.linuxserver.io/user/assets/typhoon/Asset%202.svg',
    listUrl: 'https://kasmregistry.linuxserver.io/',
    contactUrl: 'https://discord.gg/YWrKVTn',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
