/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ["page.tsx"],
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
