import './globals.css'

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    template: 'SSR | %s',
    default: 'SSR | Tech Talk',
  },
  description:
    'Explore como fazer requisições web e veja o poder das aplicações de SPAs com SSR em ação. Este site demonstra como buscar perfis do GitHub e exibir seus detalhes.',
  keywords: ['SSR', 'Tech Talk', 'Next.js', 'GitHub', 'API'],
  authors: [
    {
      name: 'Vanderlei Furtuna',
      url: 'https://github.com/vander115',
    },
  ],
  openGraph: {
    title: 'Demonstração de Requisições Web, SPA e SSR: Perfis do GitHub',
    description:
      'Veja como fazer requisições web e descubra a funcionalidade das aplicações de página única (MPA). Este site demonstra como buscar perfis do GitHub e exibir seus detalhes.',
    images: ['https://tech-talk-ssr.vercel.app/banner.png'],
    url: 'https://tech-talk-ssr.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${spaceGrotesk.variable} bg-image h-screen w-full font-sans`}
      >
        <header className="flex w-full items-center justify-between p-8">
          <span className="text-white/80">Tech Talk / SSR</span>
          <Image
            src={logo.src}
            alt="Logo Vander Dev"
            width={145}
            height={40}
            className=""
          />
        </header>
        <section className="flex h-full w-full flex-col items-center justify-start gap-8">
          {children}
        </section>
      </body>
    </html>
  )
}
