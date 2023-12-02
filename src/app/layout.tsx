import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Twin example',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
