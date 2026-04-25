import './globals.css'

export const metadata = {
  title: 'Habesha Harvest',
  description: 'Premium Ethiopian Injera Export',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
