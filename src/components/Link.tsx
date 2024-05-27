import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends NextLinkProps {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink
      className="relative h-fit flex-shrink-0 cursor-pointer overflow-hidden rounded-lg bg-white/90 px-3 py-2 font-bold text-black transition-colors hover:bg-white"
      {...props}
    >
      {children}
    </NextLink>
  )
}
