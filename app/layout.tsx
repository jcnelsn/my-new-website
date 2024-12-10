import Nav from "@/components/nav"
import { Inter, Pacifico } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
})

export const metadata = {
  title: "Jack Nelson's Portfolio",
  description: "Digital Product Designer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav pacifico={pacifico} />
        {children}
      </body>
    </html>
  )
}
