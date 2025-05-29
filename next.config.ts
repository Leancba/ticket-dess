const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'www.todopass.com.ar',
      'blogger.googleusercontent.com',
      'www.afip.gob.ar'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withVideos(nextConfig);
