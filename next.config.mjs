import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true // mandatory, otherwise won't export
    },
    turbopack: {
        resolveAlias: {
            // Path to your `mdx-components` file with extension
            'next-mdx-import-source-file': './mdx-components.tsx'
        }
    }
}

// Set up Nextra with its configuration
const withNextra = nextra({
    // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig)