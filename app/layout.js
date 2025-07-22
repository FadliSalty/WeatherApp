import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'Simple weather UI built with Next.js and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
