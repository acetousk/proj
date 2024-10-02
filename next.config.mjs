/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      // cache riv files in the public folder
      source: "/:all*(riv)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000",
        },
      ],
    },
  ],
  webpack: (config, options) => {
    // config.experiments = {
    //   ...config.experiments,
    //   asyncWebAssembly: true,
    //   futureDefaults: true,
    // };
    config.module.rules.push({
      test: /\.wasm$/,
      use: [
        {
          loader: "url-loader",
        },
      ],
    });
    // config.module.rules.push({
    //   test: /\.wasm$/,
    //   use: [
    //     {
    //       loader: "file-loader",
    //     },
    //   ],
    // });

    return config;
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);