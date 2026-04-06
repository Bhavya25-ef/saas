import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "SAAS Automation Builder",
  description: "Build powerful automations with AI",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>⚙️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Providers>
            {children}
            <Toaster position="top-right" />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}