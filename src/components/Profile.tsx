import Image from 'next/image'

import { OtherProfileType } from '@/api/getMoreProfiles'
import { MyProfileType } from '@/api/getMyProfile'

interface ProfileProps {
  profile: MyProfileType | OtherProfileType
}

export function Profile({ profile }: ProfileProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={profile.avatar_url}
        alt={`Foto de perfil de ${profile.login}`}
        width={160}
        height={160}
        className="rounded-full"
      />
      <strong className="text-base font-bold text-white">
        {profile.login}
      </strong>
    </div>
  )
}
