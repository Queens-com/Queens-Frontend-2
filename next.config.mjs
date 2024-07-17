/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dior.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "us.louisvuitton.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.gucci.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
