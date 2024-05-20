/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mages.unsplash.com",
        port: "",
        pathname:
          "/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      },
    ],
  },
  transpilePackages: ["@repo/ui"],
};
