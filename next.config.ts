import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    // Sample LINK prefix: /listen
    // Do not add the slash at the last
    LINK_PREFIX: process.env.NODE_ENV === "production" ? "/wcag-hands-on" : ""
  },
}

export default nextConfig
