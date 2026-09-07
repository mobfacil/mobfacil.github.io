import '../../global.css'
import type { AppProps } from 'next/app'
import { Sora, Inter_Tight } from 'next/font/google'
import { ThemeProvider } from '../theme/ThemeContext'

// Display: geometric grotesk that echoes the mobfácil wordmark. Body: tight, legible companion.
const displayFont = Sora({
  subsets: ['latin'],
  variable: '--font-space-display',
  display: 'swap',
})

const bodyFont = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-space-default',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
