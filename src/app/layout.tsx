export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  console.log('params', lang);

  return (
    <html lang={lang}>
      <head />
      <body>{children}</body>
    </html>
  )
}
