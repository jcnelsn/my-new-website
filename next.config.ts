import { config } from 'process'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6wpvgtdojfw2fe30.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
