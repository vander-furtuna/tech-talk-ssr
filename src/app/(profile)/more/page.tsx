import { Metadata } from 'next'

import { BackButton } from '@/components/BackButton'
import { Link } from '@/components/Link'
import { Profile } from '@/components/Profile'
import { OtherProfile } from '@/types/profile'

export const metadata: Metadata = {
  title: 'Mais Perfis',
}

async function getProfiles(): Promise<OtherProfile[]> {
  const data = await fetch('https://api.github.com/users', {
    next: {
      revalidate: 60 * 10,
    },
  })

  return data.json()
}

export default async function More() {
  const profiles = await getProfiles()

  return (
    <>
      <h1 className="title">Mais Perfis</h1>
      <div className="btns-container">
        <BackButton />
        <Link href="/">Dashboard</Link>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center gap-x-0 gap-y-8 px-8 py-16">
        {profiles
          ? profiles.map((profile) => (
            <Profile profile={profile} key={profile.id} />
          ))
          : Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="size-40 animate-pulse bg-white/60" />
          ))}
      </div>
    </>
  )
}
