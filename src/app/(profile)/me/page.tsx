import { Metadata } from 'next'

import { BackButton } from '@/components/BackButton'
import { Link } from '@/components/Link'
import { Profile } from '@/components/Profile'
import { MyProfile } from '@/types/profile'

export const metadata: Metadata = {
  title: 'Meu Perfil',
}

async function getProfile(): Promise<MyProfile> {
  const data = await fetch('https://api.github.com/users/vander115')

  return data.json()
}

export default async function Me() {
  const profile = await getProfile()

  return (
    <>
      <h1 className="title">Meu Perfil</h1>
      {profile ? (
        <Profile profile={profile} />
      ) : (
        <div className="size-40 animate-pulse bg-white/60" />
      )}
      <div className="btns-container">
        <BackButton />
        <Link href="/more">Mais Perfis</Link>
      </div>
    </>
  )
}
