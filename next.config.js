/** @type {import('next').NextConfig} */
const nextConfig = {
  export : 'output'    
}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
  
};

module.exports = nextConfig