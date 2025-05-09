import type { NextConfig } from 'next';

const allowedRemotePatterns: { protocol: "https"; hostname: string; pathname: string }[] = [
  { protocol: "https", hostname: "www.google.com", pathname: "/s2/favicons**" },
  { protocol: "https", hostname: "initiative-klimaneutral.de", pathname: "/**" },
  { protocol: "https", hostname: "www.welt.de", pathname: "/**" },
  { protocol: "https", hostname: "stadt-und-werk.de", pathname: "/**" },
  { protocol: "https", hostname: "defence-industry.eu", pathname: "/**" },
  { protocol: "https", hostname: "www.rheinmetall.com", pathname: "/**" },
  { protocol: "https", hostname: "en.wikipedia.org", pathname: "/**" },
  { protocol: "https", hostname: "futurezone.at", pathname: "/**" },
  { protocol: "https", hostname: "p7q8s5f8.rocketcdn.me", pathname: "/**" },
  { protocol: "https", hostname: "erp-it.net", pathname: "/**" },
  { protocol: "https", hostname: "www.agrarheute.com", pathname: "/**" },
  { protocol: "https", hostname: "uploads.erp-it.net", pathname: "/**" }
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: allowedRemotePatterns, // Allowed remote image sources
  },
  allowedDevOrigins: [process.env.NEXT_PUBLIC_DEV_URL || 'http://localhost:3000'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.map$/,
      use: 'null-loader',
    });
    return config;
  },
};

export default nextConfig;