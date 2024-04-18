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
    }
  };

export default config;
