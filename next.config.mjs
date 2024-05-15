/** @type {import('next').NextConfig} */
const config = {
  
    images:{
      remotePatterns:[
        {
          hostname:"www.picsa.pro"
        },
        {
          hostname:"bit.ly"
        }
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

export default config;


