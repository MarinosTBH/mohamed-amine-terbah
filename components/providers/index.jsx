'use client'
import { ThemeProviders } from './theme-providers'
import Layout from './layout-provider'

export function Providers({ children }) {
    return (
        <ThemeProviders >
            <Layout>
                {children}
            </Layout>
        </ThemeProviders>
    )
}