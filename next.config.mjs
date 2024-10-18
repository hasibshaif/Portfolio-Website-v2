/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
      // Enable support for SVGs
      dangerouslyAllowSVG: true,
      contentDispositionType: 'inline',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
};

export default nextConfig;
