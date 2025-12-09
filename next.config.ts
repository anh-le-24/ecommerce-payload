import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import { withPayload } from '@payloadcms/next/withPayload'

initOpenNextCloudflareForDev()

const mediaRemotePatterns: NonNullable<import('next').NextConfig['images']>['remotePatterns'] = [
  {
    protocol: 'http',
    hostname: 'localhost',
    port: '3000',
    pathname: '/api/media/file/**',
  },
  {
    protocol: 'http',
    hostname: '127.0.0.1',
    port: '3000',
    pathname: '/api/media/file/**',
  },
]

const payloadServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL

if (payloadServerURL) {
  try {
    const { protocol, hostname, port } = new URL(payloadServerURL)
    mediaRemotePatterns.push({
      protocol: protocol.replace(':', '') as 'http' | 'https',
      hostname,
      port: port || undefined,
      pathname: '/api/media/file/**',
    })
  } catch {
    // ignore malformed env values
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: mediaRemotePatterns,
  },
  webpack: (webpackConfig: any) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
