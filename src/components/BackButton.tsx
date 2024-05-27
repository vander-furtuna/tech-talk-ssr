'use client'

import { useRouter } from 'next/navigation'

export function BackButton() {
  const { back } = useRouter()

  return (
    <button
      className="rounded-md bg-transparent p-2 font-bold text-white transition-colors hover:bg-white/20"
      onClick={() => back()}
    >
      Voltar
    </button>
  )
}
